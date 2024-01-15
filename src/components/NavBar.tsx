import { DownloadIcon } from "@chakra-ui/icons";
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SummeryTab from "./SummaryTab";

function NavBar () {

    const tabData = [
        { label: "סיכום", path: "/סיכום" },
        { label: "עסקי", path: "/עסקי" },
        { label: "מאגרי מידע", path: "/מאגרי מידע" },
        { label: "סטטוס משפטי", path: "/סטטוס משפטי" },
        { label: "אזכורים ברשת", path: "/אזכורים ברשת" },
        { label: "רשתות חברתיות", path: "/רשתות חברתיות" },
        { label: "download", path: "/download"},
    ];
    
    return (
        <Router>
            <Tabs 
                position="relative" 
                justifyContent="space-between" 
                alignItems="center" 
                width="100%" 
                padding="15px 10px"
            >
                <TabList
                    display="flex"
                    flexDirection="row-reverse"
                    flex="1"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    {tabData.map((tab) => (
                        <Tab key={tab.label}>
                            {tab.label === "download" ? (
                                <Link to={tab.path}>
                                    <DownloadIcon boxSize={6} display="flex" cursor="pointer" />
                                </Link>
                            ) : (
                                <Link to={tab.path}>{tab.label}</Link>
                            )}
                        </Tab>
                    ))}
                </TabList>
                <TabIndicator
                    height="2px"
                    bg="blue"
                    borderRadius="1px"
                />
                <TabPanels>
                    <TabPanel>
                        <Routes>
                            <Route path="/סיכום" element={<SummeryTab />}/>
                        </Routes>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Router>
    );
}

export default NavBar;