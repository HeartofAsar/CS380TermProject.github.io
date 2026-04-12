const itemsHomepage = [
      {
            product: {
                  title: "Notebooks",
                  filename: "Five Star Notebook1.jpg",
                  price: 27.79
            },
            itemsLeft: 3000
      },
      {
            product: {
                  title: "Computers & Hardware",
                  filename: "Macbook Neo.jpg",
                  price: 599.99
            },
            itemsLeft: 39
      },
      {
            product: {
                  title: "Calculators",
                  filename: "Ti-84 Plus CE Graphing Calculator.jpg",
                  price: 195.56
            },
            itemsLeft: 49
      },
      {
            product: {
                  title: "Pens & Pencils",
                  filename: "Paper Mate InkJoy Gel Pens.jpg",
                  price: 21.99
            },
            itemsLeft: 7655
      },   
      {
            product: {
                  title: "Binders & Folders",
                  filename: "3-ring Binder.jpg",
                  price: 16.99
            },
            itemsLeft: 421
      },         
];

const items = [
      {
            product: {
                  title: "Apple AirPods Pro (2nd Gen)",
                  filename: "Apple AirPods Pro 2nd Gen.jpg",
                  price: 258.21,
                  itemsLeft: 6993,
                  category: "Electronics",
                  brand: "Apple",
                  description: `
                  RICHER AUDIO EXPERIENCE – The Apple-designed H2 chip pushes advanced audio performance even further, resulting in smarter noise cancellation and more immersive sound. The low-distortion, custom-built driver delivers crisp, clear high notes and deep, rich bass in stunning definition. So every sound is more vivid than ever..Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ear
                  NEXT-LEVEL ACTIVE NOISE CANCELLATION – Up to 2x more Active Noise Cancellation than the previous AirPods Pro for dramatically less noise on your commute, or when you want to focus. Adaptive Transparency lets you comfortably hear the world around you, adjusting for intense noise—like sirens or construction—in real time.
                  CUSTOMIZABLE FIT – Now with four pairs of silicone tips (XS, S, M, L) to fit a wider range of ears and provide all-day comfort. The tips create an acoustic seal to help keep out noise and secure AirPods Pro in place.
                  SOUND ALL AROUND – Personalized Spatial Audio surrounds you in sound tuned just for you. It works with dynamic head tracking to immerse you deeper in music and movies.
                  HIGHER LEVEL OF CONTROL – Now you can swipe the stem to adjust volume. Press it to play and pause music or to answer and end a call, or hold it to switch between Active Noise Cancellation and Adaptive Transparency.
                  A LEAP IN BATTERY LIFE – Up to 6 hours of listening time with Active Noise Cancellation enabled — 33% more than AirPods Pro (1st generation). With the charging case, you can get 30 hours of total listening time with Active Noise Cancellation enabled — 6 hours longer than AirPods Pro (1st generation).
                  A MORE CAPABLE CASE – Keep track of AirPods Pro with Precision Finding and a built-in speaker. A lanyard loop keeps your AirPods Pro close. Charge with an Apple Watch or MagSafe charger, or use the Lightning connector or a Qi-certified charger.
                  MAGICAL EXPERIENCE – Quick access to Siri by saying “Hey Siri”. Easy setup, in-ear detection, and automatic switching between devices. Audio Sharing lets you share a song or a show between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV.
                  `,
                  id: 0,
                  bestseller: true
            }
      },
      {
            product: {
                  title: "Sony WH-1000XM5 Premium Headphones",
                  filename: "Sony WH-1000XM5 Premium Headphones.jpg",
                  price: 248.00,
                  itemsLeft: 7864,
                  category: "Electronics",
                  brand: "Sony",
                  description: `
                  NOISE CANCELLATION: Immerse yourself in the world of music with these noise cancelling headphones, the Sony WH-1000XM5. They come equipped with an advanced noise cancellation feature, powered by two processors controlling eight microphones. Experience the magic of noise cancelling headphones bluetooth technology, ensuring an uninterrupted listening experience free from external disturbances. This unique, distraction-free listening experience sets the Sony WH-1000XM5 apart from other headphones in the market.
                  HANDS-FREE CALLING: Step into the future of communication with the Sony WH-1000XM5, a pair of over-ear headphones that make crystal clear hands-free calling a reality. They come equipped with four beamforming microphones and advanced audio signal processing. These over ear headphones ensure your voice is heard clearly, even in noisy environments. This feature is a boon for professionals and individuals who value clear, crisp communication.
                  LONG BATTERY LIFE: Say goodbye to battery anxiety with the Sony WH-1000XM5, a wireless headset that offers up to 30 hours of playback time on a single charge. These head phones also feature a quick charging option that provides 3 hours of playback with just a 3-minute charge, ensuring uninterrupted music enjoyment. (USB Type-C Cable included)
                  COMFORT & STYLE: Experience the perfect blend of comfort and style with the Sony WH-1000XM5's lightweight design and soft fit leather. These headphones are designed for maximum comfort, allowing you to wear them for extended periods without any discomfort. Sound quality and comfort go hand in hand with these headphones, making them an ideal choice for music lovers.
                  TOUCH CONTROLS: Take control of your music with the Sony WH-1000XM5's intuitive touch controls. With a simple touch, you can pause, play, skip tracks, control volume, activate your voice assistant, and answer phone calls. This feature makes the Sony WH-1000XM5 a must-have for those who value convenience and control.
                  `,
                  id: 1,
                  bestseller: false
            }
      },
      {
            product: {
                  title: "Amazon Echo Dot (newest model)",
                  filename: "Amazon Echo Dot newest model.jpg",
                  price: 49.99,
                  itemsLeft: 3520,
                  category: "Electronics",
                  brand: "Amazon",
                  description: `
                  Your favorite music and content – Play music, audiobooks, and podcasts from Amazon Music, Apple Music, Spotify and others or via Bluetooth throughout your home.
                  Alexa is happy to help – Ask Alexa for weather updates and to set hands-free timers, get answers to your questions and even hear jokes. Need a few extra minutes in the morning? Just tap your Echo Dot to snooze your alarm.
                  Keep your home comfortable – Control compatible smart home devices with your voice and routines triggered by built-in motion or indoor temperature sensors. Create routines to automatically turn on lights when you walk into a room, or start a fan if the inside temperature goes above your comfort zone.
                  Designed to protect your privacy – Amazon is not in the business of selling your personal information to others. Built with multiple layers of privacy controls, including a mic off button.
                  Do more with device pairing– Fill your home with music using compatible Echo devices in different rooms, create a home theatre system with Fire TV, or extend wifi coverage with a compatible eero network so you can say goodbye to drop-offs and buffering.
                  `,
                  id: 2,
                  bestseller: true
            }
      },
      {
            product: {
                  title: "Roku Streaming Stick 4K",
                  filename: "Roku Streaming Stick 4K.jpg",
                  price: 40.99,
                  itemsLeft: 532,
                  category: "Electronics",
                  brand: "Roku",
                  description: `
                  Stunning 4K and Dolby Vision streaming made simple: With America’s TV streaming platform, exploring popular apps—plus tons of free movies, shows, and live TV—is as easy as it is fun. Based on hours streamed—Hypothesis Group
                  Breathtaking picture quality: Stunningly sharp 4K picture brings out rich detail in your entertainment with four times the resolution of HD. Watch as colors pop off your screen and enjoy lifelike clarity with Dolby Vision and HDR10 plus
                  Seamless streaming for any room: With Roku Streaming Stick 4K, watch your favorite entertainment on any TV in the house, even in rooms farther from your router thanks to the long-range Wi-Fi receiver
                  Shows on the go: Take your TV to-go when traveling—without needing to log into someone else’s device.
                  Compact without compromises: Our sleek design won’t block neighboring HDMI ports, so you can switch from streaming to gaming with ease. Plus, it’s designed to stay hidden behind your TV, keeping wires neatly out of sight
                  No more juggling remotes: Power on your TV, adjust the volume, and control your Roku device with one remote. Use your voice to quickly search, play entertainment, and more
                  All the top apps: Never ask “Where’s that streaming” again. Now all of the top apps are in one place, so you can always stream your favorite shows, movies, and more
                  Home sweet home screen: Jump right in with a home screen that easily gets you to what you want to watch fast
                  Unbelievably free live TV: Enjoy 500 plus TV channels with live news and weather, sports coverage, and more—totally free
                  `,
                  id: 4,
                  bestseller: false
            }
      },
      {
            product: {
                  title: "2022 Apple MacBook Air with Apple M2 Chip",
                  filename: "2022 Apple MacBook Air with Apple M2 Chip.jpg",
                  price: 799.00,
                  itemsLeft: 24,
                  category: "Computers & Laptops",
                  brand: "Apple",
                  description: `
                  STRIKINGLY THIN DESIGN — The redesigned MacBook Air is more portable than ever and weighs just 2.7 pounds. It’s the incredibly capable laptop that lets you work, play or create just about anything — anywhere
                  SUPERCHARGED BY M2 — Get more done faster with a next-generation 8-core CPU, up to 10-core GPU and up to 24GB of unified memory
                  BIG, BEAUTIFUL DISPLAY — The 13.6-inch Liquid Retina display features over 500 nits of brightness, P3 wide color and support for 1 billion colors for vibrant images and incredible detail
                  ADVANCED CAMERA AND AUDIO — Look sharp and sound great with a 1080p FaceTime HD camera, three-mic array and four-speaker sound system with Spatial Audio
                  VERSATILE CONNECTIVITY — MacBook Air features a MagSafe charging port, two Thunderbolt ports and a headphone jack
                  EASY TO USE — Your Mac feels familiar from the moment you turn it on, and works seamlessly with all your Apple devices
                  BUILT TO LAST — The all-aluminium unibody enclosure is exceptionally durable. And free software updates keep things running smooth and secure for years to come
                  SIMPLY COMPATIBLE — All your go-to apps run lightning-fast — including Microsoft 365, Zoom, and many of your favorite iPhone and iPad apps
                  `,
                  id: 5,
                  bestseller: true
            }
      },
      {
            product: {
                  title: 'Lenovo IdeaPad Gaming 3 15 Laptop, 15.6" FHD',
                  filename: "Lenovo IdeaPad Gaming 3 15 Laptop, 15.6 FHD.jpg",
                  price: 649.99,
                  itemsLeft: 0,
                  category: "Computers & Laptops",
                  brand: "Lenovo",
                  description: `
                  Fueled by the revolutionary AMD Ryzen 5000 H-Series mobile processor, this IdeaPad gaming laptop delivers the wins. With 6 ultra-responsive cores, it's the new standard for gaming performance in innovative, thin, and light laptops
                  15.6" FHD (1920 x 1080) IPS display with NVIDIA GeForce GTX 1650 GPU to supercharge your favorite games. Slingshot your gaming visuals with 120Hz refresh rate for tear-free gaming
                  8GB 3200 MHz DDR4 RAM memory and 256GB M.2 PCIe SSD storage
                  Connectivity: RJ45 Ethernet, 2x2 WiFi 802.11 ax, Bluetooth 5.0; 720p HD webcam and microphone array with privacy shutter; HDMI, USB-C
                  2 x 2W speakers with Nahimic Audio for Gamers; spacious gaming keyboard with white backlight
                  `,
                  id: 6,
                  bestseller: false
            }
      },
      {
            product: {
                  title: "Logitech MX Master 3S Wireless Mouse Standard",
                  filename: "Logitech MX Master 3S Wireless Mouse Standard.jpg",
                  price: 175.25,
                  itemsLeft: 714,
                  category: "Computers & Laptops",
                  brand: "Logitech",
                  description: `
                  Logitech MX Master 3S Standard Edition comes with a Logi Bolt USB receiver (dongle), and a USB-C charging cable (USB-A to USB-C)
                  Install free Logi Options+ App to enable Logi AI Prompt Builder for your Logitech wireless mouse and keyboard setups
                  8K DPI Any-surface tracking: Use MX Master 3S cordless computer mouse to work on any surface - even glass (1) - with an 8000 DPI sensor with customizable sensitivity
                  Quiet Clicks: MX Master 3S Bluetooth mouse with Quiet Clicks - offering the same satisfying feel but with 90% less click noise (2)
                  Magspeed scrolling: A computer mouse with remarkable speed, precision, and near silence - MagSpeed scrolling is 90% faster (3), 87% more precise (4), and ultra quiet.
                  FLOW cross-computer control: Work seamlessly on multiple computers or laptops, and transfer text, images, and files – between Windows & macOS (5)
                  Multi-device and multi-OS: Connect the comfort mouse with up to 3 devices via Bluetooth (6) on Windows, macOS, Chrome OS or Linux. Logi Bolt USB receiver not included.
                  Plastic parts in MX Master 3S include certified post consumer recycled plastic (Graphite and Black: 27%(10).
                  `,
                  id: 7,
                  bestseller: false
            }
      },
      {
            product: {
                  title: "SANDISK 1TB Extreme Portable SSD",
                  filename: "SANDISK 1TB Extreme Portable SSD.jpg",
                  price: 186.65,
                  itemsLeft: 9674,
                  category: "Computers & Laptops",
                  brand: "SanDisk",
                  description: `
                  Get NVMe solid state performance with up to 1050MB/s read and 1000MB/s write speeds in a portable, high-capacity drive(1) (Based on internal testing; performance may be lower depending on host device & other factors. 1MB=1,000,000 bytes.)
                  Up to 3-meter drop protection and IP65 water and dust resistance mean this tough drive can take a beating(3) (Previously rated for 2-meter drop protection and IP55 rating. Now qualified for the higher, stated specs.)
                  Use the handy carabiner loop to secure it to your belt loop or backpack for extra peace of mind.
                  Help keep private content private with the included password protection featuring 256‐bit AES hardware encryption.(3)
                  Easily manage files and automatically free up space with the SanDisk Memory Zone app.
                  `,
                  id: 8,
                  bestseller: false
            }
      },
      {
            product: {
                  title: "",
                  filename: "",
                  price: 0.00,
                  itemsLeft: 0,
                  category: "",
                  brand: "",
                  description: ``,
                  id: 9,
                  bestseller: false
            }
      },
];