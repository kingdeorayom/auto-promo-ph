import Layout from '@/layouts/Layout'
import { Box, Divider, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import styles from '@/styles/Legal.module.css'
import Link from 'next/link'

const TermsAndConditions = () => {
    return (
        <>
            <Head>
                <title>Terms and Conditions | Auto Promo PH</title>
                <meta name="description" content="Welcome to Auto Promo PH" />
            </Head>
            <Layout>
                <Box className={styles.wrapper}>
                    <Typography fontSize='2.5rem' variant="h1" fontWeight='700' mb={2}>Terms and Conditions for Auto Promo PH</Typography>
                    <Typography mb={1}><em>Last Updated: June 21, 2023</em></Typography>
                    <Typography>Please read these terms and conditions carefully before using Our Service.</Typography>
                    <Divider sx={{ my: 3 }} />

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3}>Interpretation and Definitions</Typography>
                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={2}>Interpretation</Typography>
                    <Typography mb={2}>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Typography>

                    <Typography fontSize='2rem' variant="h2" fontWeight='700' mb={2}>Definitions</Typography>
                    <Typography mb={2}>For the purposes of these Terms and Conditions:</Typography>

                    <ul style={{ marginLeft: 20 }}>
                        <li><Typography mb={1}><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where {"control"} means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</Typography></li>
                        <li><Typography mb={1}><strong>Country</strong> refers to: Philippines</Typography></li>
                        <li><Typography mb={1}><strong>Company</strong> (referred to as either {'"the Company", "We", "Us" or "Our"'} in this Agreement) refers to Auto Promo PH.</Typography></li>
                        <li><Typography mb={1}><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</Typography></li>
                        <li><Typography mb={1}><strong>Service</strong> refers to the Website.</Typography></li>
                        <li><Typography mb={1}><strong>Terms and Conditions</strong> (also referred as {"Terms"}) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Free Terms and Conditions Generator.</Typography></li>
                        <li><Typography mb={1}><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</Typography></li>
                        <li><Typography mb={1}><strong>Website</strong> refers to Auto Promo PH, accessible from <Link href='https://www.autopromo.ph' className={styles.link}>https://www.autopromo.ph</Link>.</Typography></li>
                        <li><Typography mb={1}><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</Typography></li>
                    </ul>

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3} mt={2}>Acknowledgment</Typography>

                    <Typography mb={1}>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</Typography>
                    <Typography mb={1}>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</Typography>
                    <Typography mb={1}>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</Typography>
                    <Typography mb={1}>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</Typography>
                    <Typography mb={1}>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</Typography>

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3} mt={2}>Links to Other Websites</Typography>

                    <Typography mb={1}>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</Typography>
                    <Typography mb={1}>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</Typography>
                    <Typography mb={1}>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</Typography>

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3} mt={2}>Termination</Typography>

                    <Typography mb={1}>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</Typography>
                    <Typography mb={1}>Upon termination, Your right to use the Service will cease immediately.</Typography>

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3} mt={2}>Limitation of Liability</Typography>

                    <Typography mb={1}>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You {"haven't"} purchased anything through the Service.</Typography>
                    <Typography mb={1}>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</Typography>
                    <Typography mb={1}>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each {"party's"} liability will be limited to the greatest extent permitted by law.</Typography>

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3} mt={2}>{'"AS IS"'} and {'"AS AVAILABLE"'} Disclaimer</Typography>

                    <Typography mb={1}>The Service is provided to You {'"AS IS"'} and {'"AS AVAILABLE"'} and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</Typography>
                    <Typography mb={1}>Without limiting the foregoing, neither the Company nor any of the {"company's"} provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</Typography>
                    <Typography mb={1}>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</Typography>

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3} mt={2}>Governing Law</Typography>

                    <Typography mb={1}>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</Typography>

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3} mt={2}>Disputes Resolution</Typography>

                    <Typography mb={1}>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</Typography>

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3} mt={2}>Changes to These Terms and Conditions</Typography>

                    <Typography mb={1}>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 {"days'"} notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</Typography>
                    <Typography mb={1}>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</Typography>

                    <Typography fontSize='2.5rem' variant="h2" fontWeight='700' mb={3} mt={2}>Contact Us</Typography>

                    <Typography mb={1}>If you have any questions about these Terms and Conditions, You can contact us:</Typography>

                    <ul style={{ marginLeft: 20 }}>
                        <li><Typography mb={1}>By mobile number: +63 956 475 0051</Typography></li>
                        <li><Typography mb={1}>By email: kingdeorayom@gmail.com</Typography></li>
                    </ul>

                </Box>
            </Layout>
        </>
    )
}

export default TermsAndConditions