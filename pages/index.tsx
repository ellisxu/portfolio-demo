// pages/index.tsx

import Container from '../components/container'
import Layout from '../components/layout'
import HeroSection from '../components/hero-section'
import SelectArticles from '../components/select-articles' // Add this line
import MoreArticles from '../components/more-articles'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const selectArticles = allPosts.slice(0, 3)
  const moreArticles = allPosts.slice(3)
  return (
    <>
      <Layout>
        <Head>
          <title>Kyden Prompt Tech</title>
        </Head>
        <Container>
          <HeroSection />
          <SelectArticles posts={selectArticles} />
          <MoreArticles posts={moreArticles} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts: [...allPosts, ...allPosts] },
  }
}
