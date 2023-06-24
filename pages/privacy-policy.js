import Layout from '@/layouts/Layout'
import { Box, Divider, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Legal.module.css'
import Link from 'next/link'

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>
                    <Typography fontSize='2.5rem' variant="h1" fontWeight='700' mb={2}>Privacy Policy for Auto Promo PH</Typography>
                    <Typography mb={1}><em>Last Updated: June 21, 2023</em></Typography>
                    <Typography>Please read our Privacy Policy carefully before using Our Service.</Typography>
                    <Divider sx={{ my: 3 }} />

                    <Typography mb={2}>At Auto Promo PH, accessible from <Link href='https://www.autopromo.ph' className={styles.link}>https://www.autopromo.ph</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Auto Promo PH and how we use it.</Typography>
                    <Typography mb={2}>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</Typography>
                    <Typography mb={2}>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Auto Promo PH. This policy is not applicable to any information collected offline or via channels other than this website.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={2}>Consent</Typography>
                    <Typography mb={2}>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={3} mt={2}>Information we collect</Typography>

                    <Typography mb={1}>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</Typography>
                    <Typography mb={1}>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</Typography>
                    <Typography mb={1}>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mt={3} mb={2}>How we use your information</Typography>
                    <Typography mb={2}>We use the information we collect in various ways, including to:</Typography>

                    <ul style={{ marginLeft: 20 }}>
                        <li><Typography mb={1}>Provide, operate, and maintain our website</Typography></li>
                        <li><Typography mb={1}>Improve, personalize, and expand our website</Typography></li>
                        <li><Typography mb={1}>Understand and analyze how you use our website</Typography></li>
                        <li><Typography mb={1}>Develop new products, services, features, and functionality</Typography></li>
                        <li><Typography mb={1}>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</Typography></li>
                        <li><Typography mb={1}>Send you emails</Typography></li>
                        <li><Typography mb={1}>Find and prevent fraud</Typography></li>
                    </ul>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={3} mt={2}>Log Files</Typography>

                    <Typography mb={1}>Auto Promo PH follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting {"services'"} analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking {"users'"} movement on the website, and gathering demographic information.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={3} mt={2}>Cookies and Web Beacons</Typography>

                    <Typography mb={1}>Like any other website, Auto Promo PH uses {'"cookies"'}. These cookies are used to store information including {"visitors'"} preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the {"users'"} experience by customizing our web page content based on {"visitors'"} browser type and/or other information.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={3} mt={2}>Advertising Partners Privacy Policies</Typography>

                    <Typography mb={1}>You may consult this list to find the Privacy Policy for each of the advertising partners of Auto Promo PH.</Typography>
                    <Typography mb={1}>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Auto Promo PH, which are sent directly to {"users'"} browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</Typography>
                    <Typography mb={1}>Note that Auto Promo PH has no access to or control over these cookies that are used by third-party advertisers.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={3} mt={2}>Third Party Privacy Policies</Typography>

                    <Typography mb={1}>Auto Promo {"PH's"} Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</Typography>
                    <Typography mb={1}>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the {"browsers'"} respective websites.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={3} mt={2}>GDPR Data Protection Rights</Typography>

                    <Typography mb={1}>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Typography>
                    <Typography mb={1}><strong>The right to access</strong> - You have the right to request copies of your personal data. We may charge you a small fee for this service.</Typography>
                    <Typography mb={1}><strong>The right to rectification</strong> - You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</Typography>
                    <Typography mb={1}><strong>The right to erasure</strong> - You have the right to request that we erase your personal data, under certain conditions.</Typography>
                    <Typography mb={1}><strong>The right to restrict processing</strong> - You have the right to request that we restrict the processing of your personal data, under certain conditions.</Typography>
                    <Typography mb={1}><strong>The right to object to processing</strong> - You have the right to object to our processing of your personal data, under certain conditions.</Typography>
                    <Typography mb={1}><strong>The right to data portability</strong> - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Typography>
                    <Typography mb={1}>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={3} mt={2}>{"Children's"} Information</Typography>

                    <Typography mb={1}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</Typography>
                    <Typography mb={1}>Auto Promo PH does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={3} mt={2}>Changes to This Privacy Policy</Typography>

                    <Typography mb={1}>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={3} mt={2}>Contact Us</Typography>

                    <Typography mb={1}>If you have any questions about our Privacy Policy, You can contact us:</Typography>

                    <ul style={{ marginLeft: 20 }}>
                        <li><Typography mb={1}>By mobile number: +63 956 475 0051</Typography></li>
                        <li><Typography mb={1}>By email: kingdeorayom@gmail.com</Typography></li>
                    </ul>

                </Box>
            </Layout>
        </>
    )
}

export default PrivacyPolicy