import Layout from "@/layout/layout";
import SEO from "@/seo/seo"
import LinearProgress from '@mui/material/LinearProgress';

const SkillsPage = () => {
    return (
        <SEO metaTitle="My Skills">
            <Layout>
                <div style={{ marginTop: "100px" }}>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>Material UI 80%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={80} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>TailwindCSS 80%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={80} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>ExpressJS 80%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={80} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>NextJS 80%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={80} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>MongoDB 80%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={80} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>SASS/SCSS 50%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={50} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>Firebase 50%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={50} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>JavaScript 60%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={60} />
                    </div>
                    <div style={{ margin: "50px" }}>
                        <span style={{}}>GraphQL 60%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={60} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>GraphQLCMS 60%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={60} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>MaterializeCSS 60%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={60} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>TypeScript 70%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={70} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>Styled-Components 70%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={70} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>SEO/SSR 70%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={70} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>Stripe 60%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={60} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>Bootstrap 90%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={90} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>google extensions 70%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={70} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>webpack 50%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={50} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>formik 50%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={50} />
                    </div>
                    <div style={{ margin: "50px", alignItems: "center" }}>
                        <span style={{}}>Html/Css 90%</span>
                        <LinearProgress style={{ width: "100%", marginTop: "5px" }} variant="determinate" value={90} />
                    </div>
                </div>
            </Layout>
        </SEO>
    )
}

export default SkillsPage