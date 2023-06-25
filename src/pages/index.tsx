import Layout from "@/components/Layout";
import Mesh from "@/components/Mesh";
import Code from "@/components/Code";
import Check from "@/components/icons/Check";
import Advance from "@/components/icons/Advance";
import Secure from "@/components/icons/Secure";
import Intrusion from "@/components/icons/Intrusion";
import Testimonial from "@/components/Testimonial";
import Link from "next/link";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <Layout>
      <section className="px-4 py-10 lg:py-20 lg:px-10 flex flex-col lg:flex-row lg:gap-x-16 lg:items-center space-y-20 lg:space-y-0 xl:px-0 xl:max-w-[1400px] xl:py-28 mx-auto">
        <div className="lg:flex-1">
          <h1 className="font-manrope font-medium text-[35px] mb-2 lg:text-[55px] lg:leading-[120%] xl:w-[60%]">
            Modern network <span className="text-red">security</span> solutions
          </h1>

          <p className="font-slackey text-features text-lg leading-[1.5em] w-[80%] xl:w-[70%]">
            Improve your security architecture to protect your business against
            advanced threats and malware.
          </p>

          <div className="my-9 lg:mb-11">
            <Link
              href="/contact"
              className="bg-white text-sm rounded-lg leading-none px-4 py-3 lg:px-6 lg:py-3 lg:text-lg  text-gray-400 hover:bg-red hover:text-white transition-colors"
            >
              Book a demo
            </Link>
          </div>

          <div>
            <span className="text-features">Trusted by companies globally</span>

            <div className="flex items-center lg:w-[100%] my-5 xl:w-[80%] ">
              <div className="w-[200px] h-9 overflow-hidden">
                <svg
                  viewBox="0 0 100% 100%"
                  className="scale-[90%] -mt-1 -ml-2"
                >
                  <path
                    fill="#fff"
                    d="M34.253 8.965 25.929.642l-8.323 8.323L9.282.642.958 8.965l8.324 8.324-8.324 8.324 8.324 8.323 8.324-8.323 8.323 8.323 8.324-8.323-8.324-8.324 8.324-8.324zm-8.324 8.324-8.323 8.324-8.324-8.324 8.324-8.324 8.323 8.324z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="#fff"
                    d="M60.353 27.514c-5.07 0-9.635-3.324-9.635-10.085 0-6.762 4.62-10.086 9.635-10.086 4.48 0 8.03 2.704 8.565 6.564h-3.071c-.338-2.31-2.648-3.972-5.522-3.972-3.832 0-6.592 2.62-6.592 7.494 0 4.873 2.76 7.494 6.592 7.494 2.93 0 5.268-1.663 5.578-3.973h2.958c-.422 3.86-3.944 6.564-8.508 6.564zm17.687 0c-4.254 0-7.325-3.07-7.325-7.325 0-4.254 3.071-7.324 7.325-7.324s7.297 3.07 7.297 7.324c0 4.255-3.043 7.325-7.297 7.325zm0-2.394c2.677 0 4.508-2.029 4.508-4.93 0-2.902-1.831-4.93-4.508-4.93-2.704 0-4.536 2.028-4.536 4.93 0 2.901 1.832 4.93 4.536 4.93zm9.803-17.974h3.043v3.437h-3.043V7.146zm.17 20.143V13.09h2.732v14.2h-2.733zm6.19 0V13.09h2.732v2.508c.76-1.775 2.451-2.733 4.564-2.733 3.212 0 5.296 2.31 5.296 5.69v8.734h-2.732V19.09c0-2.254-1.325-3.775-3.325-3.775-2.225 0-3.803 1.803-3.803 4.282v7.69h-2.733zm17.315 0V15.457h-2.902V13.09h2.902v-1.38c0-2.79 1.831-4.564 4.677-4.564h2.338v2.366h-2.141c-1.296 0-2.141.874-2.141 2.282v1.296h4.282v2.367h-4.282v11.832h-2.733zm21.634-14.199v14.2h-2.733v-2.507c-.761 1.774-2.451 2.732-4.564 2.732-3.212 0-5.296-2.31-5.296-5.69V13.09h2.732v8.198c0 2.254 1.325 3.775 3.325 3.775 2.225 0 3.803-1.803 3.803-4.282v-7.69h2.733zm8.488 14.424c-3.325 0-5.55-1.859-5.747-4.845h2.563c.169 1.634 1.352 2.563 3.184 2.563 1.634 0 2.676-.873 2.676-1.915 0-3.775-8.057-.31-8.057-6.367 0-2.451 2.085-4.085 5.043-4.085 3.211 0 5.409 1.775 5.55 4.451h-2.564c-.197-1.634-1.775-2.282-2.986-2.282-1.465 0-2.451.732-2.451 1.831 0 3.522 8.113-.084 8.113 6.395 0 2.592-2.113 4.254-5.324 4.254zm18.223-4.845h2.733c-.507 2.93-3.071 4.845-6.564 4.845-4.395 0-7.128-3.465-7.128-7.409 0-3.972 2.48-7.24 6.846-7.24 4.395 0 6.733 3.127 6.733 6.733 0 .366-.028.817-.056 1.07h-10.846c.225 2.677 1.972 4.508 4.451 4.508 2.085 0 3.437-.901 3.831-2.507zm-4.113-7.607c-2.225 0-3.662 1.24-4.085 3.606h8.058c-.17-2.169-1.634-3.606-3.973-3.606z"
                  />
                </svg>
              </div>

              <div className="w-[200px] h-9 overflow-hidden">
                <svg viewBox="0 0 100% 100%" className="scale-[90%] -mt-1">
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M17.214.975a6.195 6.195 0 1 1 0 12.39 6.195 6.195 0 0 1 0-12.39zM6.864 32.79a6.195 6.195 0 1 1 7.283-10.024A6.195 6.195 0 0 1 6.864 32.79zm22.091-8.653a6.195 6.195 0 1 1-10.024 7.283 6.195 6.195 0 0 1 10.024-7.283zM.459 13.118a6.195 6.195 0 1 1 11.784 3.83A6.195 6.195 0 0 1 .46 13.117zm25.7-3.977a6.195 6.195 0 1 1 3.83 11.784 6.195 6.195 0 0 1-3.83-11.784z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="#fff"
                    d="M51.92 27.475V7.895h7.324c1.784 0 3.418.366 4.902 1.099 1.502.714 2.733 1.831 3.69 3.352.977 1.503 1.465 3.287 1.465 5.353 0 3.043-.986 5.437-2.958 7.184-1.953 1.728-4.32 2.592-7.1 2.592H51.92zm3.126-2.817h3.747c2.066 0 3.785-.564 5.156-1.69 1.37-1.146 2.056-2.912 2.056-5.297 0-1.22-.197-2.291-.591-3.212-.395-.939-.94-1.671-1.634-2.197a6.714 6.714 0 0 0-2.282-1.155 8.88 8.88 0 0 0-2.705-.395h-3.747v13.946zm27.89-2.029 2.394 1.324c-1.296 2.573-3.427 3.86-6.395 3.86-2.085 0-3.803-.657-5.156-1.972-1.352-1.334-2.028-3.07-2.028-5.212 0-2.104.657-3.822 1.972-5.156 1.334-1.333 3.005-2 5.015-2 1.99 0 3.559.639 4.705 1.916 1.164 1.258 1.746 2.94 1.746 5.043 0 .47-.01.77-.028.901H74.963c.094 1.24.488 2.216 1.183 2.93.714.714 1.653 1.07 2.817 1.07 1.71 0 3.033-.9 3.973-2.704zm-4.283-6.761c-.995 0-1.822.3-2.479.901s-1.052 1.428-1.183 2.48h7.071c-.094-1.09-.432-1.925-1.014-2.508-.564-.582-1.362-.873-2.395-.873zm19.882 6.761 2.394 1.324c-1.296 2.573-3.427 3.86-6.395 3.86-2.085 0-3.803-.657-5.155-1.972-1.353-1.334-2.029-3.07-2.029-5.212 0-2.104.658-3.822 1.972-5.156 1.334-1.333 3.005-2 5.015-2 1.99 0 3.56.639 4.705 1.916 1.164 1.258 1.747 2.94 1.747 5.043 0 .47-.01.77-.029.901H90.562c.094 1.24.488 2.216 1.183 2.93.714.714 1.653 1.07 2.817 1.07 1.71 0 3.034-.9 3.973-2.704zm-4.282-6.761c-.996 0-1.822.3-2.48.901-.657.601-1.051 1.428-1.183 2.48h7.071c-.094-1.09-.432-1.925-1.014-2.508-.563-.582-1.362-.873-2.395-.873zm9.683 17.523v-19.58h2.958v2.17c1.033-1.672 2.62-2.508 4.761-2.508 1.803 0 3.315.686 4.536 2.057 1.22 1.37 1.831 3.07 1.831 5.099 0 2.047-.611 3.756-1.831 5.127-1.202 1.371-2.705 2.057-4.508 2.057-2.104 0-3.672-.798-4.705-2.395v7.973h-3.042zm7.015-8.057c1.202 0 2.15-.423 2.845-1.268.695-.845 1.042-1.99 1.042-3.437 0-1.446-.347-2.582-1.042-3.409-.695-.845-1.643-1.268-2.845-1.268-1.109 0-2.048.451-2.818 1.353-.77.901-1.155 2.01-1.155 3.324 0 1.333.385 2.451 1.155 3.352.77.902 1.709 1.353 2.818 1.353zm15.285 2.479c-1.821 0-3.343-.686-4.564-2.057-1.202-1.39-1.803-3.099-1.803-5.127 0-2.028.601-3.728 1.803-5.1 1.221-1.37 2.733-2.056 4.536-2.056 2.123 0 3.691.798 4.705 2.395V7.895h3.043v19.58h-2.959V25.22c-1.051 1.728-2.638 2.592-4.761 2.592zm.705-2.48c1.108 0 2.047-.45 2.817-1.351.77-.902 1.155-2.02 1.155-3.353 0-1.315-.385-2.423-1.155-3.324-.77-.902-1.709-1.353-2.817-1.353-1.202 0-2.151.423-2.846 1.268-.695.827-1.042 1.963-1.042 3.409 0 1.446.347 2.592 1.042 3.437.695.845 1.644 1.268 2.846 1.268zm12.356-13.832c-.545 0-.996-.169-1.353-.507-.356-.338-.535-.77-.535-1.296s.179-.958.535-1.296c.357-.357.808-.535 1.353-.535.526 0 .967.178 1.324.535.375.338.563.77.563 1.296 0 .507-.188.94-.563 1.296-.357.338-.798.507-1.324.507zm-1.522 15.974V13.81h3.043v13.664h-3.043zm10.26 0L142.71 13.81h3.268l3.86 10.537 3.775-10.537h3.24l-5.325 13.664h-3.493zm20.793-4.846 2.394 1.324c-1.296 2.573-3.427 3.86-6.395 3.86-2.084 0-3.803-.657-5.155-1.972-1.353-1.334-2.029-3.07-2.029-5.212 0-2.104.658-3.822 1.972-5.156 1.334-1.333 3.005-2 5.015-2 1.991 0 3.559.639 4.705 1.916 1.164 1.258 1.747 2.94 1.747 5.043 0 .47-.01.77-.029.901h-10.198c.094 1.24.488 2.216 1.183 2.93.714.714 1.653 1.07 2.817 1.07 1.71 0 3.034-.9 3.973-2.704zm-4.282-6.761c-.996 0-1.822.3-2.48.901-.657.601-1.051 1.428-1.183 2.48h7.071c-.094-1.09-.432-1.925-1.014-2.508-.563-.582-1.361-.873-2.394-.873z"
                  />
                </svg>
              </div>

              <div className="hidden lg:flex w-[200px] h-9">
                <svg viewBox="0 0 100% 100%" className="scale-[80%] mt-[6px]">
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M15.226 16.375C14.824 24.24 8.364 30.505.42 30.597v-30C8.364.69 14.824 6.954 15.226 14.82 15.622 7.058 21.918.854 29.717.604v29.987c-7.799-.25-14.095-6.454-14.491-14.216z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="#fff"
                    d="M66.35 25.597H63.2l-1.21-1.43c-1.66 1.137-3.549 1.705-5.667 1.705a10.04 10.04 0 0 1-3.948-.784 9.64 9.64 0 0 1-3.164-2.132c-.88-.908-1.578-1.99-2.091-3.246a10.615 10.615 0 0 1-.77-4.03c0-1.872.43-3.577 1.293-5.118a9.549 9.549 0 0 1 3.59-3.632c1.531-.89 3.228-1.334 5.09-1.334 1.384 0 2.691.261 3.92.784 1.238.514 2.297 1.22 3.178 2.119.89.89 1.59 1.958 2.104 3.205s.77 2.572.77 3.975c0 2.687-.834 4.98-2.503 6.878l2.559 3.04zM56.324 23.26c1.467 0 2.774-.395 3.92-1.183l-4.677-5.613h3.123l3.301 3.948c1.009-1.357 1.513-2.934 1.513-4.732 0-1.375-.316-2.636-.949-3.783A6.901 6.901 0 0 0 59.968 9.2c-1.1-.66-2.316-.99-3.645-.99-1.33 0-2.545.33-3.646.99a7 7 0 0 0-2.6 2.696c-.623 1.147-.935 2.408-.935 3.783 0 2.137.688 3.934 2.063 5.393 1.385 1.458 3.09 2.187 5.118 2.187zM79.75 11.856h2.6v13.742h-2.6v-1.994c-.422.688-1.04 1.238-1.857 1.65a5.77 5.77 0 0 1-2.641.62c-1.706 0-3.072-.56-4.1-1.679-1.027-1.119-1.54-2.604-1.54-4.457v-7.882h2.627v7.483c0 1.21.326 2.178.977 2.903.66.715 1.536 1.073 2.627 1.073.807 0 1.564-.197 2.27-.592.715-.403 1.261-.94 1.637-1.61v-9.257zm12.6-.289c1.312 0 2.509.317 3.59.95A6.794 6.794 0 0 1 98.5 15.1c.632 1.101.949 2.316.949 3.646 0 2.008-.688 3.7-2.064 5.076-1.366 1.366-3.044 2.05-5.034 2.05-1.312 0-2.513-.312-3.605-.936a6.823 6.823 0 0 1-2.558-2.572c-.624-1.092-.936-2.298-.936-3.618 0-2.027.684-3.728 2.05-5.104 1.367-1.384 3.05-2.077 5.049-2.077zm0 2.476c-1.293 0-2.38.45-3.26 1.348-.87.9-1.306 2.018-1.306 3.357 0 1.311.435 2.416 1.306 3.315.88.89 1.967 1.334 3.26 1.334 1.284 0 2.367-.449 3.247-1.348.88-.898 1.32-1.999 1.32-3.301 0-1.34-.44-2.458-1.32-3.357-.88-.898-1.963-1.348-3.246-1.348zm16.205-2.476c.477 0 .981.074 1.513.22l-.137 2.463a4.499 4.499 0 0 0-1.555-.262c-.596 0-1.219.225-1.871.674-.642.44-1.16 1.032-1.554 1.775v9.161h-2.627V11.855h2.627v1.995a4.47 4.47 0 0 1 1.582-1.651c.679-.422 1.353-.633 2.022-.633zm13.866.29h2.6v13.741h-2.6v-1.994c-.422.688-1.041 1.238-1.857 1.65a5.77 5.77 0 0 1-2.641.62c-1.706 0-3.072-.56-4.099-1.679-1.028-1.119-1.541-2.604-1.541-4.457v-7.882h2.627v7.483c0 1.21.326 2.178.977 2.903.66.715 1.536 1.073 2.627 1.073.807 0 1.564-.197 2.27-.592.715-.403 1.261-.94 1.637-1.61v-9.257zm22.202-.29c1.688 0 3.045.518 4.072 1.555 1.027 1.036 1.541 2.425 1.541 4.168v8.308h-2.6v-7.854c0-1.156-.307-2.068-.922-2.738-.614-.678-1.449-1.018-2.503-1.018-.697 0-1.381.211-2.05.633-.66.413-1.174.926-1.541 1.54.055.23.096.5.124.812v8.625h-2.6v-7.854c0-1.147-.312-2.06-.935-2.738-.615-.678-1.431-1.018-2.449-1.018-.761 0-1.449.197-2.063.592a3.856 3.856 0 0 0-1.417 1.554v9.464h-2.627V11.855h2.627v1.94c.413-.606.977-1.128 1.692-1.569.724-.44 1.596-.66 2.614-.66 2.045 0 3.498.816 4.36 2.449a6.584 6.584 0 0 1 1.995-1.747 5.3 5.3 0 0 1 2.682-.702z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:w-[500px] lg:h-[500px]">
          <img
            src="/img/security.svg"
            alt="security alert"
            className="w-full"
          />
        </div>
      </section>

      <section className="overflow-hidden xl:px-0 xl:max-w-[1400px] mx-auto">
        <Mesh />
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10 xl:px-0 xl:max-w-[1400px] mx-auto">
        <div className="space-y-8 lg:space-y-0 lg:flex lg:gap-x-8 items-center">
          <div className="feature relative flex space-x-4 border-b pb-8 border-b-features/40 lg:pb-0 lg:border-b-0 items-start">
            <Advance />
            <div className="flex-col space-y-2 ">
              <h3 className="font-manrope text-lg">
                Advance threat intelligence
              </h3>
              <p className="text-features">
                Stay ahead of cyber threats with our powerful threat
                intelligence.
              </p>
            </div>
          </div>

          <div className="feature relative flex space-x-4 border-b pb-8 border-b-features/40 lg:pb-0 lg:border-b-0 lg:pr-5">
            <Secure />

            <div className="flex-col space-y-2 ">
              <h3 className="font-manrope text-lg">Secure connectivity</h3>
              <p className="text-features">
                Secure your data and connections with our robust VPN solution.
              </p>
            </div>
          </div>

          <div className="flex space-x-4 ">
            <Intrusion />

            <div className="flex-col space-y-2 ">
              <h3 className="font-manrope text-lg">
                Intrusion detection system
              </h3>
              <p className="text-features lg:pr-5">
                Detect and prevent unauthorized access with our advanced IDS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10 xl:px-0 xl:max-w-[1400px] mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="lg:flex-1">
            <h3 className=" text-red text-[16px] mb-6">Threat detection</h3>

            <h1 className="font-manrope font-medium text-[28px] leading-[130%] mb-4 pr-4 lg:text-[44px] lg:w-[80%]">
              Enhanced threat detection and real-time monitoring
            </h1>
            <p className="text-features leading-[1.5em] text-lg lg:w-[85%] pr-3">
              Our security network uses advanced technology for threat
              detection. Real-time monitoring and smart alerts ensure safety and
              security of your premises.
            </p>
          </div>

          <div className="mt-8 lg:flex-1">
            <img src="/img/threat.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10 xl:px-0 xl:max-w-[1400px] mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="lg:flex-1 lg:order-2">
            <div className=" lg:w-[80%] lg:ml-auto">
              <h3 className=" text-red text-[16px] mb-6">Secure access</h3>

              <h1 className="font-manrope font-medium text-[28px] leading-[130%] mb-4 pr-4 lg:text-[44px] ">
                Proactive protection against unauthorized access
              </h1>
              <p className="text-features leading-[1.5em] text-lg pr-3 lg:pr-1">
                Our system offers peace of mind and robust protection for your
                premises. With proactive monitoring and swift response
                mechanisms, unauthorized access attempts are swiftly detected
                and mitigated.
              </p>
            </div>
          </div>

          <div className="mt-8 lg:flex-1 lg:order-1">
            <img src="/img/login.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10 xl:px-0 xl:max-w-[1400px] mx-auto">
        <div className="mb-8">
          <h3 className="font-manrope font-medium mb-6 text-[28px] leading-[120%] lg:text-[44px] lg:leading-[120%]">
            Why Nue?
          </h3>
          <p className="font-inter text-features text-[18px] leading-[1.5em] pr-3 lg:w-[40%]">
            Rest easy knowing that your sensitive information is shielded from
            ever-evolving cyber threats.
          </p>
        </div>

        <div className="space-y-8  lg:space-y-0 lg:flex lg:gap-x-8">
          <div className="card relative overflow-hidden px-8 pt-8 rounded-lg">
            <h4 className="font-manrope text-[20px] font-medium text-white mb-4">
              Seamless integration
            </h4>
            <p className="text-[16px] leading-[1.8em] mb-4">
              Nue product integrates smoothly with your existing infrastructure
              and workflows, whether they're on-premises, cloud-based, or
              hybrid.
            </p>

            <Code />
          </div>
          <div className="flex flex-col space-y-8">
            <div className="card overflow-hidden px-8 py-8 rounded-lg">
              <h4 className="font-manrope text-[20px] font-medium text-white mb-4">
                Flexible features
              </h4>
              <p className="text-[16px] leading-[1.8em]">
                We offer adaptable features to customize security protocols,
                access controls, and permissions to fit your business processes.
              </p>
            </div>
            <div className="card overflow-hidden px-8 py-8 rounded-lg">
              <h4 className="font-manrope text-[20px] font-medium text-white mb-4 pr-3">
                Consistent uptime you can rely on
              </h4>
              <p className="text-[16px] leading-[1.8em] mb-5">
                Uninterrupted uptime is crucial for business. Our network
                security product offers consistent reliability.
              </p>
              <div className="border border-white/10 w-fit bg-white/[0.05] rounded-[100px] py-3 px-4 text-sm flex items-center space-x-3">
                <div className="bg-green-200 rounded-full h-[6px] w-[6px] animate-ping flex"></div>
                <span className="text-white">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="py-16 px-4 lg:py-20 lg:px-10 xl:px-0 xl:max-w-[1400px] mx-auto">
        <div className="mb-12 lg:mb-14 lg:flex lg:items-baseline lg:justify-between">
          <div className="mb-4">
            <h3 className="font-manrope font-medium mb-6 text-[28px] leading-[120%] lg:text-[44px] lg:leading-[120%]">
              Explore our blog
            </h3>
            <p className="font-inter text-features text-[18px] leading-[1.5em] pr-3 lg:w-[100%]">
              Discover the emerging security challenges and advancements.
            </p>
          </div>
          <Link
            href="/blog"
            className="bg-transparent border border-features/60 rounded-lg px-3 py-2"
          >
            View all
          </Link>
        </div>

        <Blogs />
      </section>

      <section className="py-16 px-4 lg:py-20 lg:px-10 xl:px-0 xl:max-w-[1400px] mx-auto">
        <div className="scale px-6 py-8 rounded-[10px] space-y-8 lg:flex lg:items-center justify-between lg:p-10">
          <div className="">
            <h3 className="font-manrope mb-3 text-[25px] font-medium leading-[130%] lg:text-[35px] lg:mb-4">
              Scale with <span className="text-red">security</span>
            </h3>
            <p className="font-inter text-[16px] leading-[1.5em] text-gray mb-5 lg:mb-10">
              Are you ready to take your network security to the next level?
            </p>
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
              <div className="flex items-center space-x-4">
                <Check />
                <span className="text-sm">Stay ahead of threats</span>
              </div>

              <div className="flex items-center space-x-4">
                <Check />
                <span className="text-sm">Customized pricing options</span>
              </div>
            </div>
          </div>
          <div className="">
            <button className="bg-transparent border border-features/30 w-full py-3 rounded-lg text-sm lg:w-[200px] hover:text-white hover:bg-red transition-colors">
              Book a demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
