/*===== Components =====*/
import Head from 'next/head'
import Link from 'next/link'
import Date from '@components/date'
import Layout, { siteData } from '@components/layout'
import DesktopNav from '@components/DesktopNav'
import BlogPreview from '@components/BlogPreview'
import Container from '@components/Container'
import DragDrop from '@components/DragDrop'
import ContentGrid from '@components/ContentGrid'
import DoorSection from '@components/DoorSection'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

/*===== Posts Data =====*/
import { getSortedPostsData } from '@lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*===== Page Content =====*/
export default function Home({ allPostsData }) {
  return (
    <Layout access>
      
      <Head>
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>
      
      <div className={pageStyles.pageLevel1}>
        <section  className={pageStyles.headingSection}>
          <Container width="contentWidthXl">
            <h1>Access</h1>
          </Container>
        </section>
        
        <section  className={pageStyles.mainSection}>
          <DoorSection access/>
        </section>
      </div>
      
    </Layout>
  )
}


