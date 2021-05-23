import React, { FC } from 'react'
import Link from 'next/link'
import { Stack, Box } from '@chakra-ui/react'

const Navigation: FC = () => (
  <>
    <nav className="nav" role="navigation" aria-label="main navigation">
      <Stack direction={['column', 'row']} spacing="24px">
        <Box w="40px" h="40px" bg="green.200">
          <Link href="/">
            <a>Blog Template</a>
          </Link>
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Box>
      </Stack>
      
      
    </nav>
    < style jsx> {`
          nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.3rem;
        }
        nav a {
          margin-right: 20px;
          color: #00a395;
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style >
  </>
)

export default Navigation