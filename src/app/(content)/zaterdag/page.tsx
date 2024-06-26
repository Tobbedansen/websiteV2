import { getEventWeekend } from '@/utils/helpers';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: `Tobbedansen ${new Date().getFullYear()} - Zaterdag`,
};

const Page = () => {
  const { saturday } = getEventWeekend();
  return (
    <>
      <img className='o-banner__image' src='/img/zaterdag.jpg' />
      <section className='o-row o-row--xl'>
        <div className='o-container u-max-width-xl'>
          <article className='o-section o-section--xl'>
            <div className='o-layout'>
              <div className='o-layout__item u-1-of-2-bp3'>
                <h2 className='c-lead--head u-mb-clear'>Zaterdag</h2>
                <h2 className='c-lead--head6 u-pt-clear u-mb-xl'>
                  {saturday.toLocaleDateString('nl-be', {
                    day: 'numeric',
                    month: 'long',
                  })}
                </h2>
              </div>
              <div className='o-layout__item u-1-of-2-bp3'>
                <p className='c-lead c-lead--text u-mb-lg'>
                  Zaterdag gaan we door met het originele idee, gebaseerd op het
                  bekende TROS-programma “TER LAND, TER ZEE EN IN DE LUCHT”,
                  waarbij de deelnemers met een zelf in elkaar geknutselde tobbe
                  van een schans naar beneden rijden en zo snel mogelijk de bel
                  proberen te bereiken.
                </p>

                <p className='c-lead c-lead--text u-mb-lg'>
                  De laatste 3 jaar werden de deelnemers naar beneden geduwd op
                  een ponton om zo snel mogelijk de bel te bereiken. Dit jaar
                  grijpen we terug naar een nieuw concept. Aan de start worden
                  de deelnemers naar beneden geduwd om met een degelijke
                  snelheid van de schans (met een helling van ± 20°) te razen.
                  Vanaf deze schans komt de tobbe rechtstreeks in het water
                  terecht, eenmaal in het water varen/pedellen/… de deelnemers
                  zo snel mogelijk naar het obstakel. Het obstakel zal je moeten
                  opklimmen waarna je een hangbrug zal moeten overwinnen
                  vooraleer je de bel kan luiden. Wanneer je als deelnemer
                  uiteindelijk de bel kan luiden kan je prachtige prijzen binnen
                  halen. Heb je veel zin om deel te nemen en prachtige prijzen
                  te winnen, maar ben je net niet handig genoeg, te lui of heb
                  je geen tijd om zelf een tobbe te bouwen? Dan kun je altijd
                  deelnemen met onze eigen tobbe: de tobtobbe! Onze tobbe is
                  geschikt voor 1 persoon of maximaal 2 personen.
                </p>

                <p className='c-lead c-lead--text'>
                  Vergeet zeker niet om het reglement er eens op na te lezen,
                  hierin is duidelijk uitgelegd wat wel en niet mag.
                </p>
                <br />
                <p className='c-lead c-lead--text'>Bovenaanzicht:</p>
                <img
                  className='u-mb-lg'
                  src='img/parcour-1.jpg'
                  alt='parcour'
                />
                <br />
                <p className='c-lead c-lead--text'>Zijaanzicht:</p>
                <img
                  className='u-mb-lg'
                  src='img/parcour-2.jpg'
                  alt='parcour'
                />
                {/* <div className='iframeWrapper u-mb-lg'>
                  <iframe
                    width='560'
                    height='349'
                    src='https://www.youtube-nocookie.com/embed/w46RTqZscoM'
                    title='YouTube video player'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  />
                </div> */}

                <p className='c-lead c-lead--text u-mb-lg'>
                  Zaterdag na de prijsuitreiking gaan we door met een tweede
                  spetterend feestje. Dit wordt op gang getrokken door{' '}
                  <i>Recourse52</i>, waarna <i>Uncle Phill</i> (gekend van de
                  Engie Parkies, De Sinksenfoor, Druivenfestival…) het feest
                  compleet zullen maken na het vuurwerk.
                </p>
                <p className='c-lead c-lead--text u-mb-lg'>
                  Hierna zetten we het feest verder met het dj duo{' '}
                  <i>FRIENDZONE</i>
                  (winnaar DJ Contest ‘the graduates’). Vervolgens zal Karakals
                  ( gekend van MNM Start To DJ, Balaton Sound, Sunrise
                  Festival,….) overnemen waarna onze eigen <i>Miles</i>
                  <br></br>
                  Tobbedansen 2024 tot een mooi einde zal brengen.
                </p>
                <p className='c-lead c-lead--text u-mb-lg'>
                  Schrijf 31 augustus 2024 dus in jullie agenda, wij kijken
                  alvast uit naar jullie originele constructies en het feestje
                  achteraf, jullie hopelijk ook.
                </p>
                <p className='c-lead c-lead--text'>Tot dan!</p>
                {/* <div className="c-lead c-lead--text u-mb-lg">
                <video controls autoPlay muted className="videoInsert">
                  <source src="assets/video/aftermovie.mp4" type="video/mp4" />
                  Het is helaas niet mogelijk om onze aftermovie op deze browser
                  te tonen :(
                </video>
              </div> */}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Page;
