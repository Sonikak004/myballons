"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="w-full relative overflow-hidden bg-[#FFF8F1] text-[#221A2E] antialiased py-24">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&family=Caveat:wght@600;700&display=swap');

        .wcu-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 32px 60px;
          position: relative;
          font-family: 'Inter', sans-serif;
        }

        .wcu-head {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 60px;
          position: relative;
          z-index: 3;
        }

        .wcu-eyebrow {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #1B3B8C;
          font-weight: 700;
          background: #FDCBD4;
          padding: 7px 18px;
          border-radius: 999px;
          margin-bottom: 20px;
        }

        .wcu-head h2 {
          font-family: 'Poppins', sans-serif;
          font-weight: 800;
          font-size: clamp(34px, 4.6vw, 50px);
          line-height: 1.06;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
          color: #221A2E;
        }
        .wcu-head h2 span { color: #EC1C3F; }

        .wcu-head p {
          font-size: 16px;
          line-height: 1.7;
          color: #6E6577;
          margin: 0;
          font-weight: 400;
        }

        /* ---- scrapbook board ---- */
        .wcu-board {
          position: relative;
          min-height: 1180px;
        }

        .wcu-polaroid {
          position: absolute;
          background: #fff;
          padding: 14px 14px 46px;
          box-shadow: 0 22px 40px -18px rgba(34,26,46,0.35);
          border-radius: 4px;
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .wcu-polaroid:hover { box-shadow: 0 30px 50px -16px rgba(34,26,46,0.42); z-index: 10 !important; }
        
        .wcu-polaroid .img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 2px;
          overflow: hidden;
          background: #f3f4f6;
        }

        .wcu-tape {
          position: absolute;
          top: -14px; left: 50%;
          transform: translateX(-50%) rotate(-3deg);
          width: 78px; height: 26px;
          background: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          z-index: 20;
        }

        .wcu-p1 { width: 300px; height: 360px; left: 0; top: 20px; transform: rotate(-6deg); }
        .wcu-p1:hover { transform: rotate(-6deg) scale(1.03); }

        .wcu-p2 { width: 270px; height: 210px; left: 60px; top: 430px; transform: rotate(4deg); }
        .wcu-p2:hover { transform: rotate(4deg) scale(1.03); }

        .wcu-p3 { width: 290px; height: 380px; left: 20px; top: 690px; transform: rotate(-3deg); }
        .wcu-p3:hover { transform: rotate(-3deg) scale(1.03); }

        .wcu-polaroid figcaption {
          position: absolute;
          bottom: 12px; left: 14px; right: 14px;
          font-family: 'Caveat', cursive;
          font-size: 20px;
          font-weight: 700;
          color: #221A2E;
          text-align: left;
        }

        /* ---- tag labels ---- */
        .wcu-tag {
          position: absolute;
          max-width: 330px;
        }

        .wcu-tag .wcu-pin {
          width: 14px; height: 14px;
          border-radius: 50%;
          margin-bottom: 14px;
          box-shadow: 0 3px 6px rgba(0,0,0,0.25);
        }

        .wcu-tag h3 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 22px;
          margin: 0 0 10px;
        }
        .wcu-tag p {
          font-size: 14.5px;
          line-height: 1.7;
          color: #6E6577;
          margin: 0;
          font-weight: 400;
        }

        .wcu-t1 { left: 400px; top: 70px; }
        .wcu-t1 .wcu-pin { background: #EC1C3F; }
        .wcu-t1 h3 { color: #EC1C3F; }

        .wcu-t2 { left: 410px; top: 470px; }
        .wcu-t2 .wcu-pin { background: #1B3B8C; }
        .wcu-t2 h3 { color: #1B3B8C; }

        .wcu-t3 { left: 400px; top: 840px; }
        .wcu-t3 .wcu-pin { background: #E8A100; }
        .wcu-t3 h3 { color: #B8790A; }

        .wcu-dashes {
          position: absolute;
          z-index: 0;
        }
        .wcu-d1 { left: 378px; top: 130px; width: 36px; }
        .wcu-d2 { left: 388px; top: 530px; width: 36px; }
        .wcu-d3 { left: 378px; top: 900px; width: 36px; }
        .wcu-dashes svg { stroke: #FDCBD4; stroke-width: 2.5; stroke-dasharray: 4 6; fill: none; stroke-linecap: round; }

        .wcu-confetti-dot {
          position: absolute;
          border-radius: 50%;
          z-index: 0;
        }

        @media (max-width: 820px) {
          .wcu-board { min-height: auto; display: flex; flex-direction: column; align-items: center; }
          .wcu-polaroid, .wcu-tag, .wcu-dashes { position: static; transform: none !important; margin: 0 auto 40px; }
          .wcu-polaroid { max-width: 300px; width: 100%; }
          .wcu-tag { max-width: 100%; text-align: center; }
          .wcu-tag .wcu-pin { margin-left: auto; margin-right: auto; }
          .wcu-dashes { display: none; }
          .wcu-section { padding: 40px 20px 60px; }
        }
      `}} />

      <div className="wcu-section">
        <div className="wcu-head">
          <span className="wcu-eyebrow">Event Management Company</span>
          <h2>Why Hosts <span>Choose Us</span></h2>
          <p>With years of experience, we bring a touch of magic to every event. Our commitment to excellence ensures your special moments are nothing short of spectacular.</p>
        </div>

        <div className="wcu-board">
          <span className="wcu-confetti-dot" style={{width: '9px', height: '9px', background: '#FFC72C', left: '352px', top: '10px'}}></span>
          <span className="wcu-confetti-dot" style={{width: '7px', height: '7px', background: '#EC1C3F', left: '330px', top: '380px'}}></span>
          <span className="wcu-confetti-dot" style={{width: '8px', height: '8px', background: '#1B3B8C', left: '360px', top: '760px'}}></span>

          <figure className="wcu-polaroid wcu-p1">
            <div className="wcu-tape"></div>
            <div className="img-wrapper">
              <div className="absolute w-full h-[125%] -top-[25%] left-0">
                <Image src="/gallery/photo-13.jpg" alt="Stuthi's 1st Birthday" fill sizes="300px" className="object-cover" />
              </div>
            </div>
            <figcaption>Stuthi's 1st Birthday</figcaption>
          </figure>

          <div className="wcu-dashes wcu-d1">
            <svg viewBox="0 0 36 120" style={{ height: '120px' }}>
              <path d="M18 0 Q36 60 18 120"></path>
            </svg>
          </div>

          <div className="wcu-tag wcu-t1">
            <div className="wcu-pin"></div>
            <h3>Unmatched Creativity</h3>
            <p>We don't just follow trends; we set them with bespoke, personalized designs tailored exactly to your vision.</p>
          </div>

          <figure className="wcu-polaroid wcu-p2">
            <div className="wcu-tape"></div>
            <div className="img-wrapper">
              <div className="absolute w-full h-[125%] -top-[25%] left-0">
                <Image src="/gallery/photo-14.jpg" alt="Ushith Reddy, Turns 1" fill sizes="270px" className="object-cover" />
              </div>
            </div>
            <figcaption>Ushith Reddy, Turns 1</figcaption>
          </figure>

          <div className="wcu-dashes wcu-d2">
            <svg viewBox="0 0 36 120" style={{ height: '120px' }}>
              <path d="M18 0 Q0 60 18 120"></path>
            </svg>
          </div>

          <div className="wcu-tag wcu-t2">
            <div className="wcu-pin"></div>
            <h3>Stress-Free Planning</h3>
            <p>From conceptualization to the final toast, we handle the logistics so you can actually enjoy your event without lifting a single finger.</p>
          </div>

          <figure className="wcu-polaroid wcu-p3">
            <div className="wcu-tape"></div>
            <div className="img-wrapper">
              <div className="absolute w-full h-[125%] -top-[25%] left-0">
                <Image src="/gallery/photo-15.jpg" alt="Flawless Execution" fill sizes="290px" className="object-cover" />
              </div>
            </div>
            <figcaption>Flawless Execution</figcaption>
          </figure>

          <div className="wcu-dashes wcu-d3">
             <svg viewBox="0 0 36 120" style={{ height: '120px' }}>
              <path d="M18 0 Q36 60 18 120"></path>
            </svg>
          </div>

          <div className="wcu-tag wcu-t3">
            <div className="wcu-pin"></div>
            <h3>Flawless Execution</h3>
            <p>Our eagle-eye for detail ensures absolute perfection so that your special moments run smoothly and exactly as planned.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
