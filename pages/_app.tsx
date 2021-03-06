import * as React from "react";
import Head from "next/head";
import "animate.css";
import {
  ChakraProvider,
  Heading,
  Text,
  Image,
  Container,
  Stack,
  Divider,
  Link,
  Box,
  Flex,
  Skeleton,
  Button,
  HStack,
  Circle,
  Square,
  Badge,
} from "@chakra-ui/react";
import {AppProps} from "next/app";
import "transition-style";

import theme from "../theme";
import {INFORMATION} from "../app/constants";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
<Head>
        <title>Mofletes </title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Inicio de meta tags de licencia - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
        <meta content="mad" name="author" />
        <meta content="mad" name="copyright" />
        {/* Fin de meta tags de licencia */}
      </Head>
      <ChakraProvider theme={theme}>
        <Container backgroundColor="white" borderRadius="sm" maxWidth="container.xl" padding={4}>
          <Stack spacing={8}>
            <Stack marginBottom={4} spacing={4}>
              <Image transition-style="in:wipe:right"
                borderRadius="lg"
                height="100%"
                maxHeight={64}
                objectFit="cover"
                src={INFORMATION.banner}
              />
              <Stack
                alignItems="center"
                direction={{base: "column", sm: "row"}}
                spacing={{base: 3, sm: 6}}
              >
                <Box
                  backgroundColor="white"
                  borderRadius={9999}
                  className="animate__animated animate__lightSpeedInRight animate__slow	2s "
                  marginTop={{base: -12, sm: -16}}
                  minWidth={{base: 24, sm: 32}}
                  padding={1}
                >
                  <Image
                    borderRadius={9999}
                    height={{base: 24, sm: 32}}
                    src={INFORMATION.avatar}
                    width={{base: 24, sm: 32}}
                  />
                </Box>
                <Stack
                  alignItems={{base: "center", sm: "flex-start"}}
                  spacing={3}
                  textAlign={{base: "center", sm: "left"}}
                >
                  <Stack spacing={0}>
                    <Heading />
                    <Text
                      className="animate__animated animate__lightSpeedInRight animate__slow	3s "
                      color="gray.500"
                      fontWeight="500"
                    >
                      <h2>{INFORMATION.description} </h2>
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    {INFORMATION.social.map((social) => (
                      <Link key={social.name} isExternal href={social.url}>
                        {" "}
                        <Flex
                          alignItems="center"
                          backgroundColor="brand"
                          borderRadius={9999}
                          color="white"
                          height={10}
                          justifyContent="center"
                          width={10}
                        >
                          <Image
                            className="animate__animated animate__rotateIn animate__slow	3s "
                            src={`https://icongr.am/fontawesome/${social.name}.svg?size=24&color=ffffff`}
                          />
                        </Flex>
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Badge colorScheme="purple" paddingLeft={3}>
              {" "}
              Categorias{" "}
            </Badge>
            <HStack padding={3}>
              <Circle color="white" size="60px">
                <Link isExternal href="https://www.mofletesmdp.com.ar/">
                  <Button colorScheme="purple" size="md">
                    Ni??@s
                  </Button>
                </Link>
              </Circle>
              <Square color="white" paddingLeft={8} size="60px">
                <Link href="#">
                  <Button colorScheme="purple" size="md">
                    Bebes
                  </Button>
                </Link>
              </Square>
            </HStack>

            <Component {...pageProps} />
          </Stack>
          <Skeleton endColor="blue.300" height="40px" startColor="violet" />
          <Divider marginY={4} />
          {/* Inicio de copyright - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
          <Text
            className="animate__animated animate__flipInY animate__slow	2s "
            color="blue.500"
            textAlign="center"
          >
            ?? Copyright {new Date().getFullYear()} Creador por{" "}
            <Link isExternal href="https://www.easyturno.net">
              easyturno@2022
            </Link>
          </Text>
          {/* Fin de copyright */}
        </Container>
      </ChakraProvider>
    </>
  );
};

export default App;
