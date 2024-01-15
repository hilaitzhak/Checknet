import { Box, Text, Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, AspectRatio, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useDataFetching } from "../services/dataService";
import { FaPlayCircle } from 'react-icons/fa';

function Media() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedMedia, setSelectedMedia] = useState<string>("");
    const [selectedMediaType, setSelectedMediaType] = useState<string>("");
    const [itemsToShow, setItemsToShow] = useState<number>(9);

    const media = useDataFetching('media.json');

    const openModal = (media_url: string, media_type: string) => {
        setSelectedMedia(media_url);
        setSelectedMediaType(media_type);
        onOpen();
    };

    const handleShowMore = () => {
        setItemsToShow(prevItems => prevItems + 9);
    };

    return (
        <Flex 
            direction="column" 
            alignItems="flex-end" 
            width="25%" 
            height="300px"
            background="white" 
            boxShadow='xl'
            borderRadius="15px"
            textAlign="right"
            padding={3}
        >
            <Text fontSize="13px" fontWeight="bold">תמונות ווידאו שנמצאו</Text>
            <Box 
                width="100%" 
                height="240px" 
                background="white"
                padding={4} 
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px" }}
            >
                {media.slice(0, itemsToShow).map((item: any, index: number) => (
                    <Box 
                        key={index} 
                        overflow="hidden" 
                        onClick={() => openModal(item.url, item.type)}
                        style={{ cursor: 'pointer' }}
                    >
                        {item.type === 'photo' && (
                            <Image src={item.url} alt={`Photo ${index}`} height="100%" width="100%" objectFit="cover" />
                        )}
                        {item.type === 'video' && (
                            <Box position="relative" width="100%" height="100%">
                                <video controls width="100%" height="100%">
                                    <source src={item.url} type="video/mp4" />
                                </video>
                                <FaPlayCircle
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: 'white',
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => openModal(item.url, item.type)}
                                />
                            </Box>
                        )}

                    </Box>
                ))}
            </Box>

            {itemsToShow < media.length && (
                <Button 
                    colorScheme="white" 
                    color="black"
                    size="xs" 
                    onClick={handleShowMore}
                >
                    תמונות נוספות
                </Button>
            )}

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton style={{ zIndex: 9999 }} />
                    <ModalBody>
                        {selectedMediaType === "photo" && (
                            <Image src={selectedMedia} alt="Selected Photo" height="100%" width="100%" objectFit="contain" />
                        )}
                        {selectedMediaType === 'video' && (
                            <AspectRatio ratio={16 / 9}>
                                <video controls width="100%" height="100%">
                                    <source src={selectedMedia} type="video/mp4" />
                                </video>
                            </AspectRatio>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    );
}

export default Media;


