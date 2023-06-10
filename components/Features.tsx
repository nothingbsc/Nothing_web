import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import {
    FcSafe,
    FcAssistant,
    FcBullish,
    FcDonate,
    FcManager,
  } from 'react-icons/fc';
  
  interface CardProps {
    heading: string;
    description: string;
    icon: ReactElement;
  }
  
  const Card = ({ heading, description, icon }: CardProps) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  };
  
  export default function Features() {
    return (
      <Box p={50}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} color="white">
            What We Offer
          </Heading>
          <Text color="white" fontSize={{ base: 'sm', sm: 'lg' }}>
            BSC has become a space of short term investment opportunities. We want to change that over time.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12} color="white">
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'Supportive'}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={
                'A hard working dev and active mods.'
              }
            />
            <Card
              heading={'Community'}
              icon={<Icon as={FcBullish} w={10} h={10} />}
              description={
                'Profit sharing with the community, rewarding active members.'
              }
            />
            <Card
              heading={'Profit Share'}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                'A small percentage of each launch given as a reward to our holders'
              }
            />
            <Card
              heading={'Professional'}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                'Always professional, website + twitter prelaunch, renounced & locked.'
              }
            />
            <Card
              heading={'Safe'}
              icon={<Icon as={FcSafe} w={10} h={10} />}
              description={
                'Tax never more than 10% after launch volume.'
              }
            />
          </Flex>
        </Container>
      </Box>
    );
  }