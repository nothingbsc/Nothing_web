import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaTelegram, FaTwitter } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="75.000000pt" height="40.000000pt" viewBox="0 0 500.000000 200.000000"
        preserveAspectRatio="xMidYMid meet">
       
       <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
       <path d="M0 1000 l0 -1000 2500 0 2500 0 0 1000 0 1000 -2500 0 -2500 0 0
       -1000z m1473 282 c102 -57 154 -165 144 -297 -7 -85 -26 -132 -75 -187 -55
       -61 -120 -88 -214 -88 -67 0 -84 4 -139 33 -45 23 -71 45 -95 80 -42 61 -54
       104 -54 194 0 109 38 190 116 249 80 62 224 69 317 16z m3006 22 c63 -18 131
       -81 148 -136 l11 -38 -47 0 c-42 0 -48 3 -64 33 -23 43 -64 66 -126 74 -42 5
       -60 1 -103 -20 -61 -31 -92 -71 -108 -142 -26 -117 25 -241 113 -274 42 -16
       124 -13 163 5 37 18 78 77 89 132 l7 32 -86 0 -86 0 0 35 0 35 130 0 130 0 0
       -160 0 -160 -39 0 c-35 0 -39 3 -44 30 l-6 30 -47 -32 c-40 -29 -55 -33 -123
       -36 -64 -3 -87 0 -130 18 -63 27 -123 93 -145 157 -18 53 -21 179 -6 234 42
       150 206 232 369 183z m-3888 -211 l144 -216 3 216 2 217 45 0 45 0 0 -295 0
       -295 -43 0 -44 0 -144 217 -144 216 -3 -216 -2 -217 -40 0 -40 0 0 295 0 295
       38 0 39 0 144 -217z m1629 182 l0 -34 -82 -3 -83 -3 -3 -257 -2 -258 -40 0
       -40 0 -2 258 -3 257 -87 3 -88 3 0 34 0 35 215 0 215 0 0 -35z m282 -92 l3
       -128 140 0 140 0 3 128 3 127 39 0 40 0 0 -295 0 -295 -40 0 -40 0 0 130 0
       130 -145 0 -145 0 0 -130 0 -130 -40 0 -40 0 0 295 0 295 40 0 39 0 3 -127z
       m688 -168 l0 -295 -45 0 -45 0 0 295 0 295 45 0 45 0 0 -295z m461 78 l144
       -217 3 217 2 217 45 0 45 0 0 -295 0 -295 -45 0 -45 0 -145 217 -145 218 0
       -218 0 -217 -45 0 -45 0 0 295 0 295 44 0 43 0 144 -217z"/>
       <path d="M1228 1286 c-150 -58 -216 -243 -146 -407 57 -135 232 -193 372 -125
       106 52 152 140 144 280 -6 116 -51 191 -143 239 -51 26 -174 33 -227 13z m220
       -63 c69 -43 97 -104 97 -213 0 -68 -5 -93 -22 -125 -41 -78 -105 -115 -195
       -115 -66 0 -124 26 -165 73 -39 44 -53 91 -53 178 0 148 100 247 239 235 35
       -3 69 -14 99 -33z"/>
       <path d="M1250 1224 c-67 -29 -101 -75 -120 -159 -14 -61 1 -146 35 -197 53
       -80 180 -106 269 -54 81 47 118 171 86 288 -30 108 -164 168 -270 122z"/>
       <path d="M4300 1291 c-105 -32 -171 -118 -186 -242 -8 -68 16 -169 53 -222 53
       -76 163 -117 262 -96 47 9 64 19 103 59 l47 49 3 -52 c3 -45 6 -52 26 -55 22
       -3 22 -3 22 142 l0 146 -110 0 c-91 0 -110 -3 -110 -15 0 -12 16 -15 85 -15
       l86 0 -7 -37 c-17 -96 -71 -166 -140 -179 -153 -29 -264 67 -264 229 0 165 74
       250 217 249 76 -1 117 -21 152 -75 27 -41 71 -53 71 -18 0 33 -76 108 -127
       125 -48 17 -140 20 -183 7z"/>
       <path d="M382 1013 l3 -278 22 -3 23 -3 2 242 3 241 160 -238 c138 -206 164
       -239 188 -242 l27 -3 0 280 0 281 -25 0 -25 0 -2 -237 -3 -238 -157 238 c-148
       223 -159 237 -188 237 l-30 0 2 -277z"/>
       <path d="M1810 1270 c0 -18 7 -20 85 -20 l85 0 2 -257 3 -258 25 0 25 0 3 257
       2 257 83 3 c69 3 82 6 85 21 3 16 -11 17 -197 17 -194 0 -201 -1 -201 -20z"/>
       <path d="M2440 1009 l0 -280 23 3 c21 3 22 7 25 136 l3 132 154 0 154 0 3
       -132 3 -133 25 0 25 0 3 278 2 277 -30 0 -30 0 0 -125 0 -125 -155 0 -155 0 0
       125 0 125 -25 0 -25 0 0 -281z"/>
       <path d="M3122 1013 l3 -278 23 -3 22 -3 0 280 0 281 -25 0 -25 0 2 -277z"/>
       <path d="M3440 1010 l0 -280 25 0 25 0 2 241 3 242 160 -241 c144 -217 163
       -242 188 -242 l27 0 0 280 0 280 -25 0 -25 0 -2 -237 -3 -238 -159 238 c-145
       216 -162 237 -188 237 l-28 0 0 -280z"/>
       </g>
       </svg>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        pt={20}
        bg={useColorModeValue('black', 'black')}
        color={useColorModeValue('white', 'white')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Logo />
          <Text>© 2023 Nothing Protocol . All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/nothingcoinbsc'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Telegram'} href={'https://t.me/nothingprotocolbsc'}>
              <FaTelegram/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }