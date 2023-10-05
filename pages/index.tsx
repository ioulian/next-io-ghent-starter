import Image from "next/image";
import { NextSeo } from "next-seo";
import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import sampleSvgSprite from "@tabler/icons/arrow-right-circle.svg";
import { useState } from "react";
import { useCallback } from "react";

import { StyledMain, StyledPage } from "@/components/Demo";
import logo from "@/img/logo.png";
import logoSvg from "@/img/logo.svg";
import logoSvgSprite from "@/img/logo-sprite.svg";
import { Counter } from "@/features/counter/Counter";
import SvgSprite from "@/components/common/svg/SvgSprite";
import { requireTranslations } from "@/services/translation.service";
import { requireAnonymous } from "@/features/auth/utilities";
import Heading from "@/components/common/heading/Heading";
import LanguageSwitcher from "@/components/common/language-switcher/LanguageSwitcher";
import Button from "@/components/common/button/Button";
import { success } from "@/components/common/toast/notify";
import Overlay from "@/components/common/overlay/Overlay";

import { wrapper } from "../src/store/store";

import { NextPageWithLayout } from "./_app";

const svgSprite = <SvgSprite src={sampleSvgSprite} title=".svg sprite" />;

const Home: NextPageWithLayout = ({}: InferGetStaticPropsType<
  typeof getStaticProps
>) => {
  const { t } = useTranslation("app");
  const [, setV] = useState(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const add = useCallback(() => {
    setV((v) => v + 1);
  }, [setV]);

  const testToast = useCallback(() => {
    success("Toastify loaded dynamically!");
  }, []);

  return (
    <>
      <NextSeo
        title="Home"
        description="This will be the page meta description"
      />
      <StyledPage>
        <StyledMain>
          <div className="logo">
            <SvgSprite src={logoSvgSprite} title=".svg sprite" />
            <Image
              alt="Logo"
              src={logo}
              width={128}
              height={128}
              quality={90}
              priority
              title=".png image"
            />
            <Image
              alt="Logo"
              src={logoSvg.src}
              width={128}
              height={128}
              quality={90}
              priority
              title=".svg image"
            />
          </div>
          <Heading>{t("title")}</Heading>

          <nav>
            <SvgSprite
              src={sampleSvgSprite}
              title=".svg sprite"
              style={{
                width: 24,
                height: 24,
              }}
            />
            <LanguageSwitcher />
            <Button onClick={add} iconBefore={svgSprite}>
              Test
            </Button>
            <Button onClick={testToast} iconBefore={svgSprite}>
              Test toast
            </Button>
          </nav>

          <nav>
            <Link
              href={{
                pathname: "/serverside",
              }}
            >
              Go to server side example
            </Link>
          </nav>

          <div>
            <Counter />
          </div>

          <div>
            <Button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Open dialog
            </Button>
            <Overlay
              isOpen={isOpen}
              contentLabel="Example"
              onClose={() => {
                setIsOpen(false);
              }}
            >
              <div style={{ backgroundColor: "white", padding: "1rem" }}>
                <Overlay.Heading>
                  <Heading type="h2">Example</Heading>
                </Overlay.Heading>
                <button type="button">button 1</button>
                <button type="button">button 2</button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent porta dolor mi, at venenatis urna elementum a. Etiam
                  quis diam non massa tempor blandit at nec nibh. Pellentesque
                  non magna ac quam cursus mollis. Nunc urna dui, lobortis non
                  nulla tempus, varius sollicitudin nulla. Aliquam erat
                  volutpat. In elementum arcu diam, nec laoreet ex dignissim
                  blandit. Curabitur ornare rhoncus quam, a semper erat congue
                  quis. Proin facilisis velit sed ante gravida, et condimentum
                  nisl faucibus. Interdum et malesuada fames ac ante ipsum
                  primis in faucibus. Suspendisse eu lobortis dolor. Aliquam
                  sapien massa, condimentum sed ornare sed, pellentesque sed
                  massa. Fusce quis ipsum scelerisque, condimentum lacus ac,
                  eleifend orci. Pellentesque vehicula diam in malesuada
                  placerat. Fusce congue euismod arcu. Suspendisse molestie id
                  erat vitae pretium.
                </p>
                <p>
                  Sed et dui finibus, sodales augue nec, imperdiet augue. Aenean
                  congue sagittis dolor nec semper. Phasellus in interdum nisi.
                  Aliquam sit amet justo nec turpis ultricies ullamcorper ac ut
                  libero. Nulla a neque et erat semper viverra bibendum eu arcu.
                  Integer metus justo, bibendum quis tincidunt semper, faucibus
                  id dolor. Donec pulvinar nec enim ut luctus. Ut cursus
                  tincidunt eleifend. Nulla ante nulla, viverra eget lorem
                  auctor, varius imperdiet lectus. Nulla faucibus arcu pulvinar
                  ipsum tincidunt, quis bibendum massa egestas. Aliquam in
                  mattis diam. Proin ornare ipsum nec diam vehicula dapibus.
                  Maecenas imperdiet velit mauris, quis venenatis eros dignissim
                  in. Duis blandit purus a velit auctor ornare. Nullam dapibus
                  metus id efficitur consequat. Nam eros mi, egestas a urna nec,
                  dictum sodales sem.
                </p>
                <p>
                  Sed hendrerit odio eget sem molestie rhoncus. Donec at arcu
                  orci. Fusce sagittis vel tellus vitae viverra. Duis vel
                  faucibus eros. Sed ante erat, vestibulum sed justo sit amet,
                  feugiat dictum dui. Sed at tortor at mauris porttitor maximus.
                  Phasellus posuere scelerisque lorem nec placerat. Donec
                  condimentum turpis eu dolor mollis tempus. Phasellus non neque
                  suscipit, iaculis diam id, maximus arcu. Fusce sed fringilla
                  justo. Phasellus vitae blandit nisl, a pulvinar dui. Etiam
                  facilisis id elit at dignissim. Suspendisse feugiat, ipsum
                  eget volutpat congue, nibh est convallis felis, in egestas
                  risus ex quis turpis. Mauris rhoncus tempor convallis.
                  Vestibulum luctus orci ex, fringilla elementum lacus eleifend
                  sit amet. In hac habitasse platea dictumst.
                </p>
                <p>
                  Fusce sit amet nisi lacinia nisi bibendum ullamcorper sed et
                  urna. Donec eu euismod leo, at suscipit arcu. Suspendisse non
                  lacus purus. Donec eu ante volutpat, condimentum tortor eu,
                  laoreet lorem. Praesent tempor, arcu ut facilisis dapibus,
                  nisi magna ullamcorper felis, eu ornare nisl arcu et quam.
                  Nunc dictum luctus ante a viverra. Donec a enim massa.
                  Phasellus tempus quam commodo mollis dapibus. Curabitur eros
                  libero, dapibus a tellus vel, interdum congue diam. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Aliquam vel venenatis massa, eu
                  tristique sapien. Pellentesque volutpat, nunc a interdum
                  faucibus, lorem nibh tristique dolor, tincidunt cursus velit
                  arcu vel lectus. Vestibulum ante ipsum primis in faucibus orci
                  luctus et ultrices posuere cubilia curae; Praesent vitae dui
                  nec leo elementum tristique. Donec auctor sed dui ut semper.
                </p>
                <p>
                  Proin non elit vulputate, malesuada ipsum et, vestibulum
                  lectus. Donec nec est vel nisl ultricies dictum et ac augue.
                  Aliquam nibh mauris, condimentum at felis a, aliquam viverra
                  tellus. Aenean commodo, orci id tristique tempus, magna justo
                  malesuada magna, sit amet hendrerit erat urna dictum justo.
                  Aliquam eu ultricies nibh. Aliquam interdum, arcu id dignissim
                  lobortis, dolor eros efficitur lacus, sed mollis mauris metus
                  eu lectus. Sed sagittis leo non rhoncus pretium. Cras
                  facilisis magna vitae placerat imperdiet. Nunc scelerisque ut
                  turpis vel pharetra. Nunc congue ipsum sem, suscipit
                  condimentum neque dictum faucibus. Duis viverra quam id nibh
                  maximus placerat.
                </p>
                <p>
                  Etiam lobortis fringilla elit, a venenatis ex posuere ut. In
                  sed blandit arcu. Sed feugiat iaculis neque, ultrices dictum
                  arcu porttitor et. Phasellus tristique iaculis consectetur.
                  Integer bibendum vulputate enim non eleifend. Proin accumsan
                  aliquam risus non aliquet. In id scelerisque sapien. Nunc
                  tempor, leo ut dapibus venenatis, justo odio blandit tellus,
                  ut imperdiet sapien nisi nec sem. Phasellus finibus arcu at
                  sapien malesuada lobortis. Phasellus pellentesque nulla quam.
                  Fusce feugiat mauris lorem, et rhoncus ante scelerisque nec.
                </p>
                <p>
                  Morbi pharetra felis in dui dignissim commodo sed a mi. Etiam
                  odio odio, sollicitudin nec lacus non, rutrum vulputate dui.
                  Nam cursus hendrerit molestie. Aenean eleifend quis tortor ut
                  laoreet. Nunc pellentesque, quam et semper gravida, mauris
                  felis consectetur nisi, et efficitur neque libero quis est.
                  Mauris porttitor tempor urna, et vestibulum tortor mattis a.
                  Nunc mauris mauris, aliquam quis ornare nec, lacinia suscipit
                  orci. Etiam sit amet feugiat mauris, vel mattis metus. Sed
                  vehicula ante id tristique viverra.
                </p>
                <p>
                  Nunc sed arcu in nulla rhoncus mollis in ac nisl. Donec varius
                  facilisis metus quis ultrices. Fusce quis tincidunt nisi, nec
                  varius erat. Nunc condimentum odio vitae erat consectetur,
                  eget ornare orci malesuada. Duis pretium felis gravida,
                  efficitur lectus sit amet, congue metus. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia
                  curae; Proin consequat accumsan nisi, non ornare nisi
                  sollicitudin vitae. Suspendisse lobortis non lacus quis
                  dictum. Vivamus ornare convallis lorem ac consequat. Morbi
                  tristique sapien orci, quis tincidunt risus sagittis semper.
                  Sed tristique venenatis vulputate. Nullam viverra, lacus quis
                  ullamcorper laoreet, eros ante tempor ante, et commodo leo
                  augue at metus. Donec viverra in lorem bibendum laoreet.
                </p>
                <p>
                  Fusce pulvinar dignissim odio, vitae egestas ex sodales in.
                  Suspendisse vel maximus neque. Praesent purus risus, fermentum
                  ut felis ut, sollicitudin vehicula odio. Sed sed nulla dictum,
                  porttitor neque a, semper arcu. Maecenas nibh ligula, aliquet
                  sit amet ipsum at, semper cursus quam. In iaculis porttitor
                  erat tincidunt gravida. Duis porta nibh vitae odio placerat
                  vestibulum.
                </p>
                <p>
                  Nullam auctor dignissim mattis. Etiam sed augue eleifend,
                  aliquet massa vitae, tincidunt erat. Cras egestas volutpat
                  dignissim. Suspendisse nec ultricies leo. Sed eu purus et erat
                  commodo placerat. Mauris et molestie dolor. Morbi condimentum
                  magna in ultricies lobortis. Vestibulum at scelerisque nunc.
                  Sed luctus sodales enim.
                </p>
              </div>
            </Overlay>
          </div>
        </StyledMain>
      </StyledPage>
    </>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () =>
    ({ locale }: GetStaticPropsContext) =>
      new Promise((resolve) => {
        requireAnonymous()
          .then(requireTranslations(locale!, ["app", "common"]))
          .then(({ result }) => {
            resolve(result);
          });
      }),
);

export default Home;
