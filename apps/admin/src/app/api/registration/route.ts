import prisma from '@/app/db';
import { z } from 'zod';

async function isEventAcceptingRegistrations(
  eventId: string
): Promise<boolean> {
  // Find the event that is currently accepting reservations
  const activeEvent = await prisma.event.findFirst({
    where: {
      id: eventId,
      registration_start_date: {
        lte: new Date(), // Check if registration start date is less than or equal to current date
      },
    },
  });

  return !!activeEvent; // Return true if there's an active event, false otherwise
}

export async function POST(req: Request) {
  try {
    const FullRegistrationSchema = z.object({
      music_request: z.string().optional().nullable(),
      assosciation: z.string().optional().nullable(),
      registrant: z.object({
        first_name: z.string(),
        last_name: z.string(),
        email: z.string(),
        date_of_birth: z.coerce.date(),
        place_of_birth: z.string(),
      }),
      participants: z.array(
        z.object({
          first_name: z.string(),
          last_name: z.string(),
          date_of_birth: z.coerce.date(),
        })
      ),
      vessel: z.object({
        name: z.string(),
        type: z.string(),
        vessel_type_id: z.string(),
      }),
      event: z.string(),
    });

    const { registrant, participants, vessel, event, ...registration } =
      FullRegistrationSchema.parse(req.body);

    const allowRegistrations = await isEventAcceptingRegistrations(event);

    if (!allowRegistrations)
      return new Response(`We laten momenteel nog geen inschrijvingen toe.`, {
        status: 400,
      });

    await prisma.registration.create({
      data: {
        registrant: {
          create: {
            ...registrant,
          },
        },
        participants: {
          createMany: {
            data: participants,
          },
        },
        vessel: {
          create: {
            name: vessel.name,
            type: {
              connect: {
                id: vessel.vessel_type_id,
              },
            },
          },
        },
        event: {
          connect: {
            id: event,
          },
        },
        ...registration,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.issues.toString(), { status: 400 });
    }
    return new Response(
      'Er ging iets mis, als dit blijft voorkomen stuur je ons best een berichtje.',
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {}
