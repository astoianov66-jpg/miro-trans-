import { useState, useEffect } from "react";
import svgPaths from "./svg-ta8kiut748";
import imgImage from "./d09950aa0dde5ab958350a4d920a18579811a36a.png";
import carRefuelingImage from "../car-refueling-fuel-station.jpg";
import mechanicImage from "../mid-section-mechanic-with-wrench-tool-pocket.jpg";

function Svg() {
  return (
    <div className="absolute left-[421px] size-[500px] top-[30px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 500 500">
        <g id="SVG">
          <path d="M62.5 458.33H312.5" id="Vector" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M83.33 187.5H291.66" id="Vector_2" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p11e01f00} id="Vector_3" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17d5eb40} id="Vector_4" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[560px] left-0 opacity-3 overflow-clip top-0 w-[1342px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute left-[191px] size-[96px] top-[51px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
        <g id="SVG">
          <path d="M12 88H60" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2" />
          <path d="M16 36H56" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2" />
          <path d={svgPaths.p2d5fa100} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2" />
          <path d={svgPaths.p7898600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#1e1e1e] border border-[rgba(204,34,34,0.2)] border-solid h-[200px] left-[96px] overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[480px]" data-name="Background">
      <div className="absolute h-full left-0 top-0 w-full" data-name="Image">
        <img alt="Кола на зареждане на бензиностанция" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={carRefuelingImage} />
      </div>
      <div className="absolute h-full left-0 top-0 w-full" style={{ backgroundImage: "linear-gradient(-41.1604deg, rgba(17, 17, 17, 0.6) 14.645%, rgba(17, 17, 17, 0) 50%, rgba(17, 17, 17, 0) 85.355%)" }} data-name="Overlay" />
    </div>
  );
}

function Container3({ heroSlide }: { heroSlide: number }) {
  const slides = [
    {
      badge: "Горива",
      title: "БЕНЗИНОСТАНЦИИ",
      subtitle: "Дизел · Бензин · Газ",
      image: carRefuelingImage,
      alt: "Кола на зареждане"
    },
    {
      badge: "Работни Машини",
      title: "СТРОИТЕЛНА ТЕХНИКА",
      subtitle: "Под наем и за продажба",
      image: imgImage,
      alt: "Строителна машина"
    },
    {
      badge: "Сервиз",
      title: "АВТОСЕРВИЗ",
      subtitle: "Професионални услуги",
      image: mechanicImage,
      alt: "Механик"
    }
  ];

  const currentSlide = slides[heroSlide];

  return (
    <div className="absolute h-[378.09px] left-[335px] top-[90.95px] w-[672px] transition-opacity duration-500" data-name="Container">
      <div className="absolute bg-[#1e1e1e] border border-[rgba(204,34,34,0.2)] border-solid h-[200px] left-[96px] overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[480px] transition-all duration-500" data-name="Background">
        <div className="absolute h-full left-0 top-0 w-full transition-opacity duration-500" data-name="Image">
          <img alt={currentSlide.alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-all duration-500" src={currentSlide.image} />
        </div>
        <div className="absolute h-full left-0 top-0 w-full" style={{ backgroundImage: "linear-gradient(-41.1604deg, rgba(17, 17, 17, 0.6) 14.645%, rgba(17, 17, 17, 0) 50%, rgba(17, 17, 17, 0) 85.355%)" }} data-name="Overlay" />
      </div>
      <div className="absolute h-[46.5px] left-[24px] top-[220px] w-[624px] transition-opacity duration-500" data-name="Container">
        <div className="absolute bg-[rgba(204,34,34,0.15)] border border-[rgba(204,34,34,0.2)] border-solid h-[30.5px] left-[258.72px] rounded-[9999px] top-0 w-auto px-4" data-name="Background">
          <p className="[word-break:break-word] absolute font-['Inter:ExtraBold',sans-serif] leading-[16.5px] left-1/2 -translate-x-1/2 not-italic text-[#c22] text-[11px] text-center top-[7px] tracking-[1.1px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            {currentSlide.badge}
          </p>
        </div>
      </div>
      <div className="absolute h-[83.59px] left-[24px] top-[266.5px] w-[624px] transition-opacity duration-500" data-name="Heading 1">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Oswald:SemiBold',sans-serif] font-semibold leading-[83.6px] left-[351.98px] text-[#c22] text-[88px] text-center top-[-24px] tracking-[1.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
          {currentSlide.title}
        </p>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[94.22px] not-italic text-[#888] text-[13px] text-center top-[362.1px] tracking-[2px] whitespace-nowrap transition-opacity duration-500" style={{ fontFeatureSettings: '"dlig"' }}>
        {currentSlide.subtitle}
      </p>
    </div>
  );
}

function Container1() {
  const [heroSlide, setHeroSlide] = useState(0);

  const nextSlide = () => {
    setHeroSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setHeroSlide((prev) => (prev - 1 + 3) % 3);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute h-[560px] left-0 top-0 w-[1342px]" data-name="Container">
      <Container2 />
      <Container3 heroSlide={heroSlide} />
      <Container5 onNext={nextSlide} onPrev={prevSlide} />
      <Container6 heroSlide={heroSlide} setHeroSlide={setHeroSlide} />
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute left-[9px] size-[20px] top-[9px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[rgba(17,17,17,0.8)] border border-[rgba(204,34,34,0.2)] border-solid left-[32px] rounded-[9999px] size-[40px] top-0 cursor-pointer hover:bg-[rgba(204,34,34,0.2)] transition-colors" data-name="Button">
      <Svg3 />
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute left-[9px] size-[20px] top-[9px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[rgba(17,17,17,0.8)] border border-[rgba(204,34,34,0.2)] border-solid left-[1270px] rounded-[9999px] size-[40px] top-0 cursor-pointer hover:bg-[rgba(204,34,34,0.2)] transition-colors" data-name="Button">
      <Svg4 />
    </div>
  );
}

function Container5({ onNext, onPrev }: { onNext: () => void; onPrev: () => void }) {
  return (
    <div className="absolute h-[40px] left-0 top-[260px] w-[1342px]" data-name="Container">
      <Button onClick={onPrev} />
      <Button1 onClick={onNext} />
    </div>
  );
}

function Button2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`absolute ${isActive ? 'bg-[#c22] size-[12px] top-[-2px]' : 'bg-[#444] size-[8px] top-0'} left-0 rounded-[9999px] cursor-pointer hover:bg-[#c22] transition-all`}
      data-name="Button"
    />
  );
}

function Button3({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`absolute ${isActive ? 'bg-[#c22] size-[12px] top-[-2px]' : 'bg-[#444] size-[8px] top-0'} left-[14px] rounded-[9999px] cursor-pointer hover:bg-[#c22] transition-all`}
      data-name="Button"
    />
  );
}

function Button4({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`absolute ${isActive ? 'bg-[#c22] size-[12px] top-[-2px]' : 'bg-[#444] size-[8px] top-0'} left-[32px] rounded-[9999px] cursor-pointer hover:bg-[#c22] transition-all`}
      data-name="Button"
    />
  );
}

function Container6({ heroSlide, setHeroSlide }: { heroSlide: number; setHeroSlide: (slide: number) => void }) {
  return (
    <div className="absolute h-[12px] left-[651px] top-[526px] w-[40px]" data-name="Container">
      <Button2 isActive={heroSlide === 0} onClick={() => setHeroSlide(0)} />
      <Button3 isActive={heroSlide === 1} onClick={() => setHeroSlide(1)} />
      <Button4 isActive={heroSlide === 2} onClick={() => setHeroSlide(2)} />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#111] h-[560px] left-0 overflow-clip top-0 w-[1342px]" data-name="Background">
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute font-['Oswald:SemiBold',sans-serif] font-semibold h-[40px] leading-[40px] left-0 text-[38px] top-[24.5px] tracking-[1.5px] w-[1100px]" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute left-[483.2px] text-white top-[-8px]" style={{ fontFeatureSettings: '"dlig"' }}>
        НАШИТЕ
      </p>
      <p className="-translate-x-1/2 absolute left-[624.44px] text-[#c22] top-[-8px]" style={{ fontFeatureSettings: '"dlig"' }}>
        УСЛУГИ
      </p>
    </div>
  );
}

function Container8() {
  return (
    <div className="[word-break:break-word] absolute h-[64.5px] left-0 text-center top-0 w-[1100px] whitespace-nowrap" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:ExtraBold',sans-serif] leading-[16.5px] left-[55.34px] not-italic text-[#c22] text-[11px] top-0 tracking-[3px]" style={{ fontFeatureSettings: '"dlig"' }}>
        Какво предлагаме
      </p>
      <Heading1 />
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute left-[578px] size-[520px] top-[-41px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 520 520">
        <g id="SVG">
          <path d={svgPaths.p32c7ce80} id="Vector" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M346.66 390H238.33" id="Vector_2" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1101cd00} id="Vector_3" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1d21c280} id="Vector_4" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M86.67 238.34V86.67" id="Vector_5" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M151.67 325H151.89" id="Vector_6" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M173.33 218.84V86.67" id="Vector_7" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18e42800} id="Vector_8" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2afcd100} id="Vector_9" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[438px] left-0 opacity-4 top-0 w-[1098px]" data-name="Container">
      <Svg5 />
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute left-[16px] size-[12px] top-[8.25px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p2a30a780} id="Vector" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 9H5.5" id="Vector_2" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1fea5e0} id="Vector_3" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4d0260} id="Vector_4" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2 5.5V2" id="Vector_5" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3.5 7.5H3.51" id="Vector_6" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 5.05V2" id="Vector_7" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p36a3aa00} id="Vector_8" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p28094200} id="Vector_9" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[rgba(204,34,34,0.15)] border border-[rgba(204,34,34,0.2)] border-solid h-[30.5px] left-0 rounded-[9999px] top-0 w-[180.78px]" data-name="Background">
      <Svg6 />
      <p className="[word-break:break-word] absolute font-['Inter:ExtraBold',sans-serif] leading-[16.5px] left-[36px] not-italic text-[#c22] text-[11px] top-[7px] tracking-[1.1px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Работни Машини
      </p>
    </div>
  );
}

function Container12() {
  return <div className="absolute h-[107px] left-[281.59px] top-[-20px] w-0" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="absolute h-[136.78px] left-0 top-[50.5px] w-[485px]" data-name="Heading 3">
      <p className="[word-break:break-word] absolute font-['Oswald:SemiBold',sans-serif] font-semibold leading-[68.4px] left-0 text-[72px] text-white top-[-20px] tracking-[1.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        РАБОТНИ
      </p>
      <Container12 />
      <p className="[word-break:break-word] absolute font-['Oswald:SemiBold',sans-serif] font-semibold leading-[68.4px] left-0 text-[#c22] text-[72px] top-[48.39px] tracking-[1.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        МАШИНИ
      </p>
    </div>
  );
}

function Background7() {
  return <div className="absolute bg-[rgba(204,34,34,0.2)] h-px left-[27.67px] top-[7.5px] w-[48px]" data-name="Background" />;
}

function Container13() {
  return (
    <div className="absolute h-[16px] left-0 top-[252.78px] w-[485px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#c22] text-[12px] top-0 tracking-[1.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        01
      </p>
      <Background7 />
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[87.67px] not-italic text-[#666] text-[12px] top-0 tracking-[1.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        03
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[268.78px] left-[48px] top-[84.61px] w-[485px]" data-name="Container">
      <Background6 />
      <Heading2 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.5px] left-0 not-italic text-[#999] text-[15px] top-[203.28px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Строителни машини под наем и за продажба.
      </p>
      <Container13 />
    </div>
  );
}

function Background9() {
  return <div className="absolute h-[278px] left-0 top-0 w-[318px]" style={{ backgroundImage: "linear-gradient(-41.1604deg, rgba(17, 17, 17, 0.6) 14.645%, rgba(17, 17, 17, 0) 50%, rgba(17, 17, 17, 0) 85.355%)" }} data-name="Background" />;
}

function Background8() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(204,34,34,0.2)] border-solid h-[280px] left-[82.5px] overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[320px]" data-name="Background">
      <div className="absolute h-[278px] left-0 top-0 w-[318px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Background9 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[280px] left-[565px] top-[79px] w-[485px]" data-name="Container">
      <Background8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[438px] left-0 top-0 w-[1098px]" data-name="Container">
      <Container11 />
      <Container14 />
    </div>
  );
}

function Container10Fuel() {
  return (
    <div className="absolute h-[438px] left-0 top-0 w-[1098px]" data-name="Container">
      <div className="absolute h-[268.78px] left-[48px] top-[84.61px] w-[485px]" data-name="Container">
        <div className="absolute bg-[rgba(204,34,34,0.15)] border border-[rgba(204,34,34,0.2)] border-solid h-[30.5px] left-0 rounded-[9999px] top-0 w-[106.55px]" data-name="Background">
          <div className="absolute left-[16px] size-[12px] top-[8.25px]" data-name="SVG">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <g clipPath="url(#clip0_1_242)" id="SVG">
                <path d="M1.5 11H7.5" id="Vector" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M2 4.5H7" id="Vector_2" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p38b63000} id="Vector_3" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.pf855100} id="Vector_4" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
              <defs>
                <clipPath id="clip0_1_242">
                  <rect fill="white" height="12" width="12" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:ExtraBold',sans-serif] leading-[16.5px] left-[57.66px] not-italic text-[#c22] text-[11px] text-center top-[7px] tracking-[1.1px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            Горива
          </p>
        </div>
        <div className="absolute h-[136.78px] left-0 top-[50.5px] w-[485px]" data-name="Heading 3">
          <p className="[word-break:break-word] absolute font-['Oswald:SemiBold',sans-serif] font-semibold leading-[68.4px] left-0 text-[72px] text-white top-[-20px] tracking-[1.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            БЕНЗИНО
          </p>
          <p className="[word-break:break-word] absolute font-['Oswald:SemiBold',sans-serif] font-semibold leading-[68.4px] left-0 text-[#c22] text-[72px] top-[48.39px] tracking-[1.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            СТАНЦИИ
          </p>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.5px] left-0 not-italic text-[#999] text-[15px] top-[203.28px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
          Дизел, бензин и газ на топ цени.
        </p>
        <div className="absolute h-[16px] left-0 top-[252.78px] w-[485px]" data-name="Container">
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#c22] text-[12px] top-0 tracking-[1.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            02
          </p>
          <div className="absolute bg-[rgba(204,34,34,0.2)] h-px left-[27.67px] top-[7.5px] w-[48px]" data-name="Background" />
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[87.67px] not-italic text-[#666] text-[12px] top-0 tracking-[1.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            03
          </p>
        </div>
      </div>
      <div className="absolute h-[280px] left-[565px] top-[79px] w-[485px]" data-name="Container">
        <div className="absolute bg-[#1a1a1a] border border-[rgba(204,34,34,0.2)] border-solid h-[280px] left-[82.5px] overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[320px]" data-name="Background">
          <div className="absolute h-[278px] left-0 top-0 w-[318px]" data-name="Image">
            <img alt="Кола на зареждане" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={carRefuelingImage} />
          </div>
          <div className="absolute h-[278px] left-0 top-0 w-[318px]" style={{ backgroundImage: "linear-gradient(-41.1604deg, rgba(17, 17, 17, 0.6) 14.645%, rgba(17, 17, 17, 0) 50%, rgba(17, 17, 17, 0) 85.355%)" }} data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container10Service() {
  return (
    <div className="absolute h-[438px] left-0 top-0 w-[1098px]" data-name="Container">
      <div className="absolute h-[268.78px] left-[48px] top-[84.61px] w-[485px]" data-name="Container">
        <div className="absolute bg-[rgba(204,34,34,0.15)] border border-[rgba(204,34,34,0.2)] border-solid h-[30.5px] left-0 rounded-[9999px] top-0 w-[106.55px]" data-name="Background">
          <div className="absolute left-[16px] size-[12px] top-[8.25px]" data-name="SVG">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <g clipPath="url(#clip0_1_188_service)" id="SVG">
                <path d={svgPaths.p1e70ac0} id="Vector" stroke="var(--stroke-0, #CC2222)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
              <defs>
                <clipPath id="clip0_1_188_service">
                  <rect fill="white" height="12" width="12" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:ExtraBold',sans-serif] leading-[16.5px] left-[57.66px] not-italic text-[#c22] text-[11px] text-center top-[7px] tracking-[1.1px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            Сервиз
          </p>
        </div>
        <div className="absolute h-[136.78px] left-0 top-[50.5px] w-[485px]" data-name="Heading 3">
          <p className="[word-break:break-word] absolute font-['Oswald:SemiBold',sans-serif] font-semibold leading-[68.4px] left-0 text-[72px] text-white top-[-20px] tracking-[1.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            АВТОМОБИЛЕН
          </p>
          <p className="[word-break:break-word] absolute font-['Oswald:SemiBold',sans-serif] font-semibold leading-[68.4px] left-0 text-[#c22] text-[72px] top-[48.39px] tracking-[1.5px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            СЕРВИЗ
          </p>
        </div>
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.5px] left-0 not-italic text-[#999] text-[15px] top-[203.28px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
          Професионални услуги и ремонт.
        </p>
        <div className="absolute h-[16px] left-0 top-[252.78px] w-[485px]" data-name="Container">
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#c22] text-[12px] top-0 tracking-[1.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            03
          </p>
          <div className="absolute bg-[rgba(204,34,34,0.2)] h-px left-[27.67px] top-[7.5px] w-[48px]" data-name="Background" />
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[87.67px] not-italic text-[#666] text-[12px] top-0 tracking-[1.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
            03
          </p>
        </div>
      </div>
      <div className="absolute h-[280px] left-[565px] top-[79px] w-[485px]" data-name="Container">
        <div className="absolute bg-[#1a1a1a] border border-[rgba(204,34,34,0.2)] border-solid h-[280px] left-[82.5px] overflow-clip rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[320px]" data-name="Background">
          <div className="absolute h-[278px] left-0 top-0 w-[318px]" data-name="Image">
            <img alt="Механик с инструменти" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={mechanicImage} />
          </div>
          <div className="absolute h-[278px] left-0 top-0 w-[318px]" style={{ backgroundImage: "linear-gradient(-41.1604deg, rgba(17, 17, 17, 0.6) 14.645%, rgba(17, 17, 17, 0) 50%, rgba(17, 17, 17, 0) 85.355%)" }} data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute left-[9px] size-[20px] top-[9px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.8)] border border-[rgba(204,34,34,0.2)] border-solid left-[16px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Svg7 />
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute left-[9px] size-[20px] top-[9px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(17,17,17,0.8)] border border-[rgba(204,34,34,0.2)] border-solid left-[1042px] rounded-[9999px] size-[40px] top-0" data-name="Button">
      <Svg8 />
    </div>
  );
}

function Container15({ activeTab }: { activeTab: string }) {
  const handlePrev = () => {
    const tabs = ["machines", "fuel", "service"];
    const currentIndex = tabs.indexOf(activeTab);
    return tabs[(currentIndex - 1 + tabs.length) % tabs.length];
  };

  const handleNext = () => {
    const tabs = ["machines", "fuel", "service"];
    const currentIndex = tabs.indexOf(activeTab);
    return tabs[(currentIndex + 1) % tabs.length];
  };

  return (
    <div className="absolute h-[40px] left-0 top-[199px] w-[1098px]" data-name="Container">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Background5({ activeTab }: { activeTab: string }) {
  return (
    <div className="absolute bg-[#181818] border border-[rgba(204,34,34,0.2)] border-solid h-[440px] left-0 overflow-clip rounded-[16px] top-[104.5px] w-[1100px]" data-name="Background">
      <Container9 />
      {activeTab === "machines" && <Container10 />}
      {activeTab === "fuel" && <Container10Fuel />}
      {activeTab === "service" && <Container10Service />}
      <Container15 activeTab={activeTab} />
    </div>
  );
}

function Background10() {
  return <div className="absolute bg-[#c22] h-[2px] left-0 rounded-bl-[8px] rounded-br-[8px] top-[38px] w-[359.33px]" data-name="Background" />;
}

function Button7({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const isActive = activeTab === "machines";
  return (
    <div
      onClick={() => setActiveTab("machines")}
      className={`absolute ${isActive ? 'bg-[rgba(204,34,34,0.15)] border-[#c22]' : 'bg-[#181818] border-[rgba(204,34,34,0.2)]'} border border-solid h-[42px] left-0 rounded-[8px] top-0 w-[361.33px] cursor-pointer transition-colors`}
      data-name="Button"
    >
      <Container17 isActive={isActive} />
      {isActive && <Background10 />}
    </div>
  );
}

function Container17({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute h-[16px] left-[16px] top-[12px] w-[327.33px]" data-name="Container">
      <Svg9 isActive={isActive} />
      <p className={`[word-break:break-word] absolute font-['Inter:ExtraBold',sans-serif] leading-[16px] left-[28px] not-italic ${isActive ? 'text-white' : 'text-[#888]'} text-[12px] top-0 tracking-[1.2px] whitespace-nowrap`} style={{ fontFeatureSettings: '"dlig"' }}>
        Работни Машини
      </p>
    </div>
  );
}

function Svg9({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#CC2222" : "#888888";
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2380ae80} id="Vector" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10.66 12H7.33" id="Vector_2" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3663f748} id="Vector_3" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p29baab80} id="Vector_4" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.67 7.34V2.67" id="Vector_5" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4.67 10H4.68" id="Vector_6" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5.33 6.74V2.67" id="Vector_7" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4fe4400} id="Vector_8" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p21d3f300} id="Vector_9" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Svg10({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#CC2222" : "#888888";
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M2 14.67H10" id="Vector" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M2.66 6H9.33" id="Vector_2" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p7cebec0} id="Vector_3" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2204e360} id="Vector_4" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container18({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute h-[16px] left-[16px] top-[12px] w-[327.33px]" data-name="Container">
      <Svg10 isActive={isActive} />
      <p className={`[word-break:break-word] absolute font-['Inter:ExtraBold',sans-serif] leading-[16px] left-[28px] not-italic ${isActive ? 'text-white' : 'text-[#888]'} text-[12px] top-0 tracking-[1.2px] whitespace-nowrap`} style={{ fontFeatureSettings: '"dlig"' }}>
        Бензиностанции
      </p>
    </div>
  );
}

function Button8({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const isActive = activeTab === "fuel";
  return (
    <div
      onClick={() => setActiveTab("fuel")}
      className={`absolute ${isActive ? 'bg-[rgba(204,34,34,0.15)] border-[#c22]' : 'bg-[#181818] border-[rgba(204,34,34,0.2)]'} border border-solid h-[42px] left-[369.33px] rounded-[8px] top-0 w-[361.33px] cursor-pointer transition-colors`}
      data-name="Button"
    >
      <Container18 isActive={isActive} />
      {isActive && <div className="absolute bg-[#c22] h-[2px] left-0 rounded-bl-[8px] rounded-br-[8px] top-[38px] w-[359.33px]" data-name="Background" />}
    </div>
  );
}

function Svg11({ isActive }: { isActive: boolean }) {
  const color = isActive ? "#CC2222" : "#888888";
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_188)" id="SVG">
          <path d={svgPaths.p1e70ac0} id="Vector" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_188">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container19({ isActive }: { isActive: boolean }) {
  return (
    <div className="absolute h-[16px] left-[16px] top-[12px] w-[327.34px]" data-name="Container">
      <Svg11 isActive={isActive} />
      <p className={`[word-break:break-word] absolute font-['Inter:ExtraBold',sans-serif] leading-[16px] left-[28px] not-italic ${isActive ? 'text-white' : 'text-[#888]'} text-[12px] top-0 tracking-[1.2px] whitespace-nowrap`} style={{ fontFeatureSettings: '"dlig"' }}>
        Сервиз
      </p>
    </div>
  );
}

function Button9({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const isActive = activeTab === "service";
  return (
    <div
      onClick={() => setActiveTab("service")}
      className={`absolute ${isActive ? 'bg-[rgba(204,34,34,0.15)] border-[#c22]' : 'bg-[#181818] border-[rgba(204,34,34,0.2)]'} border border-solid h-[42px] left-[738.66px] rounded-[8px] top-0 w-[361.34px] cursor-pointer transition-colors`}
      data-name="Button"
    >
      <Container19 isActive={isActive} />
      {isActive && <div className="absolute bg-[#c22] h-[2px] left-0 rounded-bl-[8px] rounded-br-[8px] top-[38px] w-[361.34px]" data-name="Background" />}
    </div>
  );
}

function Container16({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  return (
    <div className="absolute h-[42px] left-0 top-[568.5px] w-[1100px]" data-name="Container">
      <Button7 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Button8 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Button9 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Container7() {
  const [activeTab, setActiveTab] = useState("machines");

  return (
    <div className="absolute h-[610.5px] left-[121px] top-[64px] w-[1100px]" data-name="Container">
      <Container8 />
      <Background5 activeTab={activeTab} />
      <Container16 activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#111] border-[rgba(204,34,34,0.2)] border-solid border-t h-[739.5px] left-0 overflow-clip top-[560px] w-[1342px]" data-name="Background">
      <Container7 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[1299.5px] left-0 top-[64px] w-[1342px]" data-name="Container">
      <Background1 />
      <Background4 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="[word-break:break-word] absolute font-['Oswald:SemiBold',sans-serif] font-semibold h-[40px] leading-[40px] left-[32px] text-[38px] text-center top-[56px] tracking-[1.5px] w-[1278px] whitespace-nowrap" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute left-[604.61px] text-white top-[-8px]" style={{ fontFeatureSettings: '"dlig"' }}>
        СВЪРЖИ СЕ С
      </p>
      <p className="-translate-x-1/2 absolute left-[760.36px] text-[#c22] top-[-8px]" style={{ fontFeatureSettings: '"dlig"' }}>
        НАС
      </p>
    </div>
  );
}

function Svg12() {
  return (
    <div className="absolute left-[32px] size-[16px] top-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_185)" id="SVG">
          <path d={svgPaths.p16a56600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_185">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#c22] h-[48px] left-[585.08px] rounded-[8px] top-[156px] w-[171.83px]" data-name="Link">
      <Svg12 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:ExtraBold',sans-serif] leading-[20px] left-[89.69px] not-italic text-[14px] text-center text-white top-[15px] tracking-[1px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Обади се
      </p>
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[#161616] border-[rgba(204,34,34,0.2)] border-solid border-t h-[261px] left-0 top-[1363.5px] w-[1342px]" data-name="Background">
      <Heading3 />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[224.94px] not-italic text-[#888] text-[14px] text-center top-[104px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Готови сме да отговорим на всички ваши въпроси
      </p>
      <Link />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[16px] left-[32px] top-[20px] w-[285.33px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[#444] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        © 2025
      </p>
      <p className="absolute font-['Inter:SemiBold',sans-serif] left-[47.05px] text-[#c22] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        Миро Транс 86
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-[141.09px] text-[#444] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        · Всички права запазени
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[16px] left-[1164.11px] top-[20px] w-[145.89px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal left-0 text-[#444] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        Изработено от
      </p>
      <p className="absolute font-['Inter:SemiBold',sans-serif] left-[89.67px] text-[#c22] top-0" style={{ fontFeatureSettings: '"dlig"' }}>
        AS Digital
      </p>
    </div>
  );
}

function Background12() {
  return (
    <div className="[word-break:break-word] absolute bg-[#0d0d0d] border-[rgba(204,34,34,0.2)] border-solid border-t h-[57px] leading-[16px] left-0 not-italic text-[12px] top-[1624.5px] w-[1342px] whitespace-nowrap" data-name="Background">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="[word-break:break-word] absolute font-['Oswald:SemiBold',sans-serif] font-semibold h-[32px] leading-[32px] left-[32px] text-[24px] top-[15.5px] tracking-[2px] w-[183.91px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 text-white top-[-2px]" style={{ fontFeatureSettings: '"dlig"' }}>
        МИРО
      </p>
      <p className="absolute left-[65.69px] text-[#c22] top-[-2px]" style={{ fontFeatureSettings: '"dlig"' }}>
        ТРАНС
      </p>
      <p className="absolute left-[146.77px] text-white top-[-2px]" style={{ fontFeatureSettings: '"dlig"' }}>
        86
      </p>
    </div>
  );
}

function Svg13() {
  return (
    <div className="absolute left-[77.36px] size-[12px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #BBBBBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute h-[32px] left-0 rounded-[6px] top-0 w-[103.36px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[37.63px] not-italic text-[#bbb] text-[12px] text-center top-[8px] tracking-[1.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Услуги
      </p>
      <Svg13 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[32px] left-0 top-0 w-[103.36px]" data-name="Container">
      <Button10 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="absolute left-[73.04px] size-[12px] top-[10px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #BBBBBB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute h-[32px] left-0 rounded-[6px] top-0 w-[99.05px]" data-name="Button">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[35.11px] not-italic text-[#bbb] text-[12px] text-center top-[8px] tracking-[1.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        За нас
      </p>
      <Svg14 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[32px] left-[107.36px] top-0 w-[99.05px]" data-name="Container">
      <Button11 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[32px] left-0 rounded-[6px] top-0 w-[105.66px]" data-name="Link">
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-[14px] not-italic text-[#bbb] text-[12px] top-[8px] tracking-[1.2px] whitespace-nowrap" style={{ fontFeatureSettings: '"dlig"' }}>
        Контакти
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[32px] left-[210.4px] top-0 w-[105.66px]" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[32px] left-[993.94px] top-[15.5px] w-[316.06px]" data-name="Container">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-[#111] border-[rgba(204,34,34,0.2)] border-b border-solid h-[64px] left-0 top-[600px] w-[1342px]" data-name="Background">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#111] h-[1681.5px] left-0 top-0 w-[1342px]" data-name="Background">
      <Container />
      <Background11 />
      <Background12 />
      <Background13 />
    </div>
  );
}

export default function MiroTrans86Website() {
  return (
    <div className="bg-white relative size-full" data-name="Miro Trans 86 Website">
      <Background />
    </div>
  );
}