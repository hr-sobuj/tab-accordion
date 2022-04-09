import { Disclosure, Tab } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const tabs = [
    {
      title: "About Athena",
      icon: (
        <svg
          height="46"
          viewBox="0 0 42 46"
          width="42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-3 -1)">
            <path
              d="m45.0177 46.5c-.4455-10.7565-8.208-19.329-17.7465-19.329-9.537 0-17.2995 8.5725-17.745 19.329z"
              fill="#9c40cd"
            ></path>
            <path
              d="m31.20645 12.6636c0-4.50876878-3.6546231-8.163-8.1645-8.163-4.5085729 0-8.163 3.65442712-8.163 8.163 0 4.5098769 3.6542312 8.1645 8.163 8.1645 4.5100729 0 8.1645-3.6544271 8.1645-8.1645zm3 0c0 6.1669271-4.9975729 11.1645-11.1645 11.1645-6.165695 0-11.163-4.9978408-11.163-11.1645 0-6.16542712 4.9975729-11.163 11.163-11.163 6.1666592 0 11.1645 4.99730496 11.1645 11.163z"
              fill="#ff00a0"
            ></path>
            <path
              d="m43.0014054 43.199508.0835449 1.579242h-40.08540064l.0835449-1.579242c.50934328-9.6280716 9.30843554-17.163258 19.95840544-17.163258 10.6512234 0 19.4505503 7.5349614 19.9599054 17.163258zm-19.9599054-14.163258c-8.5061247 0-15.5379304 5.5332442-16.78494885 12.7425h33.57139845c-1.2470403-7.2093996-8.2791127-12.7425-16.7864496-12.7425z"
              fill="#4b1167"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Athena’s rates",
      icon: (
        <svg
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="m38.055 18.009c0 12.2055-9.0504012 22.8215664-20.0799012 22.8215664-3.0029308 0-5.531339-.3364023-7.871339-1.3999023 3.759 5.7765 10.2692402 8.5693359 17.1932402 8.5693359 11.4345 0 20.703-10.257 20.703-22.9095 0-10.5765-6.4845-19.4535-15.288-22.0905 3.306 3.942 5.343 9.207 5.343 15.009z"
              fill="#9c40cd"
            ></path>
            <path
              d="m43.5405 23.271c0-11.1950389-9.0763931-20.271-20.271-20.271-11.1952548 0-20.2695 9.075109-20.2695 20.271 0 11.194925 9.0747792 20.271 20.2695 20.271 11.1940729 0 20.271-9.0769271 20.271-20.271zm3 0c0 12.8509271-10.4200729 23.271-23.271 23.271-12.851671 0-23.2695-10.4193166-23.2695-23.271 0-12.8526813 10.417327-23.271 23.2695-23.271 12.8514292 0 23.271 10.4190749 23.271 23.271z"
              fill="#4b1167"
            ></path>
            <path
              d="m17.9751 17.02815c.0015-1.734 1.356-2.9595 3.567-3.2625l-.0045 6.354c-2.214-.6285-3.564-1.4085-3.5625-3.0915m10.536 10.848c-.0015 2.4075-2.172 3.5385-4.338 3.8235l.006-7.4445c2.8155.7665 4.3335 1.62 4.332 3.621m-4.329-7.173.006-6.9315c1.734.2505 3.66 1.1475 3.8775 3.8565l.027.345 3.6645.0015-.0315-.4035c-.318-4.164-3.057-6.7605-7.536-7.1655l.003-2.904-2.646-.0015-.003 2.9025c-4.359.3825-7.1565 3.0345-7.1595 6.834-.003 4.521 4.041 5.661 7.1505 6.438l-.0075 8.0295c-2.577-.3045-4.11-1.8165-4.3335-4.2915l-.0315-.342-3.6615-.0015.0345.4065c.3705 4.3365 3.42 7.218 7.9905 7.587l-.003 2.7615 2.646.0015.0015-2.763c4.83-.414 7.9305-3.2745 7.9335-7.359.003-4.9395-4.3155-6.1185-7.9215-7.0005"
              fill="#ff00a0"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Athena’s home loans",
      icon: (
        <svg
          height="45"
          viewBox="0 0 47 45"
          width="47"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-1 -1)">
            <path
              d="m34.6114796 4.20645h10.3992695l-.1039047 13.7846982-10.4221657-6.6927477zm2.9026417 5.47204952 4.4338343 2.84725228.0400953-5.3193018h-4.4297305z"
              fill="#ff00a0"
            ></path>
            <path
              d="m21.855 43.65225h5.145v-16.3935h-5.145z"
              fill="#9c40cd"
            ></path>
            <path
              d="m3 19.074v2.2965h45v-3.441l-21.819-11.9295z"
              fill="#9c40cd"
            ></path>
            <g fill="#4b1167">
              <path d="m22.5 42.25875h3v-15h-3zm6-18v21h-9v-21z"></path>
              <path d="m43.5 16.9561606.7167977.4388338-.3562401-.6357944h-.3605576zm-.3217184-.1969606-19.1782816-11.74121797-19.17828159 11.74121797zm-39.0388392 0-.3562401.6357944.7167977-.4388338v-.1969606zm42.3605576 3h-45v-4.4839606l22.5-13.77482143 22.5 13.77482143z"></path>
              <path d="m3 45.25875v-28.812h42v28.812zm39-3v-22.812h-36v22.812z"></path>
              <path d="m9 33.25875v-9h9v9zm6-3v-3h-3v3z"></path>
              <path d="m30 33.25875v-9h9v9zm6-3v-3h-3v3z"></path>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Refinancing to Athena",
      icon: (
        <svg
          height="44"
          viewBox="0 0 47 44"
          width="47"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-1 -3)">
            <path
              d="m21.4400698 20.5563879 9.0524648-10.95060611 2.3122308 1.91143641-10.9635352 13.2623939-6.8050769-5.6233137 1.9109934-2.3125968z"
              fill="#ff00a0"
            ></path>
            <path d="m6 27 15 6.6-15 9.9z" fill="#9c40cd"></path>
            <path d="m27.54555 33 20.454 13.5v-22.5z" fill="#9c40cd"></path>
            <path
              d="m10.50045 3.0003v10.695l-9 6.435v26.37h44.9985v-26.3775l-8.9985-6.3375v-10.785zm3 22.6935v-19.6935h20.9985v19.6935l-8.3955 3.876-2.103-1.353-2.103 1.353zm-8.823-4.071 5.823-4.218v6.9045zm32.823-4.1685 5.8785 4.1415-5.8785 2.7135zm-8.4045 14.0385 14.4045-6.648v15.909zm-24.597-6.648 14.4045 6.648-14.4045 9.261zm19.5015 6.939 18.225 11.7165h-36.4515z"
              fill="#4b1167"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Home loans for buying property",
      icon: (
        <svg
          height="47"
          viewBox="0 0 44 47"
          width="44"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-3 -1)">
            <path
              d="m37.46415 15.0006v26.7135h-31.5015v6.2865h40.5v-33z"
              fill="#9c40cd"
            ></path>
            <path
              d="m5.928 43.5378h36.072v-27.072h-36.072zm12.0705-35.538c.006-1.452 1.6695-2.811 4.0455-3.303 3.591-.741 6.891.6705 7.722 2.4585.111.24.162.4995.1635.843l.0195 5.5395h-11.97zm14.9505 5.538-.0195-5.55c-.003-.7785-.1485-1.4655-.4425-2.0985-1.5285-3.2835-6.3825-5.097-11.052-4.1295-3.837.795-6.423 3.2985-6.4365 6.2295l-.0195 5.5485h-11.979v32.928h41.928v-32.928z"
              fill="#4b1167"
            ></path>
            <path
              d="m25.464 29.7439421v9.2560579h-3v-9.2559519c-1.7479616-.6176381-3.00015-2.2844592-3.00015-4.2440481 0-2.4855 2.0145-4.5 4.5-4.5s4.5 2.0145 4.5 4.5c0 1.9594768-1.2520451 3.6262193-2.99985 4.2439421z"
              fill="#ff02a0"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Managing my loan",
      icon: (
        <svg
          height="46"
          viewBox="0 0 47 46"
          width="47"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" transform="translate(-1 -1)">
            <path d="m6 20.9955h42v-7.4985h-42z" fill="#9c40cd"></path>
            <g fill="#4b1167">
              <path d="m43.5 16.4955h-39v-3h13.5l-.0045 1.5h12.009l-.0045-1.5h13.5zm-39 27h39v-24h-39zm16.521-36.9945c.003-.825.8235-1.599 1.9965-1.881 1.617-.3915 3.4335.264 3.888 1.401.0495.126.0735.2775.0735.4785l.0165 5.496h-5.991zm8.97 3.9945-.012-4.0065c-.0015-.5835-.096-1.0995-.288-1.581-1.02-2.5515-4.2615-3.9585-7.3785-3.2055-2.559.618-4.2825 2.5425-4.2915 4.788l-.012 4.005h-16.509v36h45v-36z"></path>
              <path d="m25.5 38.9955h15v-3h-15z"></path>
              <path d="m25.5 32.9955h15v-3h-15z"></path>
              <path d="m25.5 26.9955h15v-3h-15z"></path>
            </g>
            <g fill="#ff00a0">
              <path d="m14.78835 29.04195c-1.776-.4875-2.8215-2.3205-2.337-4.095.486-1.776 2.3175-2.8185 4.0935-2.331 1.7745.4875 2.8215 2.3205 2.337 4.0965-.486 1.7745-2.3175 2.817-4.0935 2.3295"></path>
              <path d="m10.72185 37.4955h9.8895c-.645-2.1195-2.6175-3.666-4.9455-3.666-2.3265 0-4.299 1.5465-4.944 3.666zm13.1115 3h-16.3335v-1.5c0-4.503 3.663-8.166 8.166-8.166s8.1675 3.663 8.1675 8.166z"></path>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  const accordion = [
    [
      {
        title: "Labore ut consectetur eiusmod ea cupidatat Lorem culpa voluptate.",
        description: "Id quis id mollit et occaecat. Ad culpa sit et id deserunt duis non sunt deserunt consectetur velit mollit sunt in. Labore ut consectetur eiusmod ea cupidatat Lorem culpa voluptate. Minim voluptate sint elit duis sint ea fugiat anim. Minim aute ipsum occaecat officia sit exercitation proident id excepteur nostrud. In qui officia consectetur reprehenderit id minim cupidatat laboris.",
      },
      {
        title: "Labore ut consectetur eiusmod ea cupidatat Lorem culpa voluptate.",
        description: "Id quis id mollit et occaecat. Ad culpa sit et id deserunt duis non sunt deserunt consectetur velit mollit sunt in. Labore ut consectetur eiusmod ea cupidatat Lorem culpa voluptate. Minim voluptate sint elit duis sint ea fugiat anim. Minim aute ipsum occaecat officia sit exercitation proident id excepteur nostrud. In qui officia consectetur reprehenderit id minim cupidatat laboris.",
      },
    ],
    [
      {
        title: "t et occaecat. Ad culpa sit et id deserunt duis non sunt deserunt consectetur velit mollit sunt in.",
        description: "Id quis id molli Labore ut consectetur eiusmod ea cupidatat Lorem culpa voluptate. Minim voluptate sint elit duis sint ea fugiat anim. Minim aute ipsum occaecat officia sit exercitation proident id excepteur nostrud. In qui officia consectetur reprehenderit id minim cupidatat laboris.",
      },
    ],
    [
      {
        title: "te sint elit duis sint ea fugiat anim. Minim aute i",
        description: "Id quis id mollit et occaecat. Ad culpa sit et id deserunt duis non sunt deserunt consectetur velit mollit sunt in. Labore ut consectetur eiusmod ea cupidatat Lorem culpa voluptate. Minim voluptapsum occaecat officia sit exercitation proident id excepteur nostrud. In qui officia consectetur reprehenderit id minim cupidatat laboris.",
      },
    ],
    [
      {
        title: " sint elit duis sint ea fugiat anim",
        description: "Id quis id mollit et occaecat. Ad culpa sit et id deserunt duis non sunt deserunt consectetur velit mollit sunt in. Labore ut consectetur eiusmod ea cupidatat Lorem culpa voluptate. Minim voluptate. Minim aute ipsum occaecat officia sit exercitation proident id excepteur nostrud. In qui officia consectetur reprehenderit id minim cupidatat laboris.",
      },
    ],
    [
      {
        title: " mollit sunt in. Labore ut consectetur eiusmod ea cupidatat Lorem culpa voluptate. Minim voluptate sint elit duis sint",
        description: "Id quis id mollit et occaecat. Ad culpa sit et id deserunt duis non sunt deserunt consectetur velit ea fugiat anim. Minim aute ipsum occaecat officia sit exercitation proident id excepteur nostrud. In qui officia consectetur reprehenderit id minim cupidatat laboris.",
      },
    ],
    [
      {
        title: "t sunt in. Labore ut consec",
        description: "Id quis id mollit et occaecat. Ad culpa sit et id deserunt duis non sunt deserunt consectetur velit mollitetur eiusmod ea cupidatat Lorem culpa voluptate. Minim voluptate sint elit duis sint ea fugiat anim. Minim aute ipsum occaecat officia sit exercitation proident id excepteur nostrud. In qui officia consectetur reprehenderit id minim cupidatat laboris.",
      },
    ],
  ];

  return (
    <>
      {/* tab  */}
      <div className="w-full max-w-6xl px-2 py-16 sm:px-0 mx-auto">
        <Tab.Group>
          <Tab.List className="flex flex-col bg-white md:flex-row">
            {tabs.map((item, index) => {
              return (
                <>
                  <Tab as="div"
                    key={index}
                    className={({ selected }) =>
                      classNames(
                        "w-full text-center max-w-xl min-h-min py-9 px-2 text-lg leading-5 font-normal text-black",
                        "border",
                        selected
                          ? "bg-white shadow text-purple-900 font-bold border-b-4 border-b-purple-700"
                          : " hover:text-purple-900 hover:font-medium"
                      )
                    }
                  >
                    <div className="flex flex-col justify-center items-center gap-y-3">
                      <p>{item.icon}</p>
                      <span className={({selected})=>{
                        classNames(selected?"font-medium text-center":"")
                      }}>{item.title}</span>
                    </div>
                  </Tab>
                </>
              );
            })}
          </Tab.List>
          <Tab.Panels className="mt-14">
            {accordion.map((accordionTab) => {
              return (
                <>
                  <Tab.Panel
                    className={classNames(
                      "bg-white",
                      "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                    )}
                  >
                    {accordionTab.map((item) => {
                      return (
                        <>
                          {/* accordion  */}
                          <Disclosure className="mb-5">
                            {({ open }) => (
                              <>
                                <Disclosure.Button className={`flex justify-between w-full ${open?'py-6 px-6 mb-0 mt-5':'py-6 px-6 mb-5 mt-5'} text-xl font-normal text-left text-gray-900 bg-purple-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                                  <span>{item.title}</span>
                                  <ChevronUpIcon
                                    className={`${
                                      open ? "transform rotate-180" : ""
                                    }  w-9 h-9 text-purple-700`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-6 pt-0 pb-2 text-xl text-gray-900 bg-purple-100 ">
                                  {item.description}
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </>
                      );
                    })}
                  </Tab.Panel>
                </>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
