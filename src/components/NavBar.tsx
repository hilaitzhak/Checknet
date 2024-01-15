import { DownloadIcon } from "@chakra-ui/icons";
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import SummeryTab from "./SummaryTab";
import BusinessTab from "./BusinessTab";
import DataWarehouse from "./DataWarehouse";
import TrialStatus from "./TrialStatus";
import NetworkTab from "./NetworkTab";
import SocialNetworkTab from "./SocialNetworkTab";
import DownloadTab from "./DownloadTab";

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
            <Tabs 
                position="relative" 
                justifyContent="space-between" 
                alignItems="center" 
                width="100%" 
                padding="15px 10px"
                defaultIndex={0}
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
                                <DownloadIcon boxSize={6} display="flex" cursor="pointer" />
                            ) : (
                                <p>{tab.label}</p>
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
                    <TabPanel><SummeryTab /></TabPanel>
                    <TabPanel><BusinessTab /></TabPanel>
                    <TabPanel><DataWarehouse /></TabPanel>
                    <TabPanel><TrialStatus /></TabPanel>
                    <TabPanel><NetworkTab /></TabPanel>
                    <TabPanel><SocialNetworkTab /></TabPanel>
                    <TabPanel><DownloadTab /></TabPanel>
                    <Routes>
                        <Route path="*" element={<Navigate to="/" replace={true} />}/>
                    </Routes>
                </TabPanels>
            </Tabs>
    );
}

export default NavBar;