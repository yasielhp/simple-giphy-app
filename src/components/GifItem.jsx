import { Grid, Text, Col, Row, Button, Card, Modal, Image } from '@nextui-org/react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { IconX } from './IconX';
import { saveAs } from 'file-saver'
export const GifItem = ({ title, url }) => {
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)
  const closeHandler = () => { setVisible(false) }
  const downloadHandler = () => {
    saveAs(url, title)
  }

  return (
    <>
      <Grid xs={15} sm={4} md={3} justify='center'>
        <Card css={{ w: "400px", h: "400px" }} isPressable isHoverable onPress={handler}>
          <Card.Body css={{ p: 0 }} >
            <Card.Image src={url} width="100%" height="100%" objectFit='cover' alt={title}/>
          </Card.Body>
          <Card.Footer isBlurred css={{ position: "absolute", bgBlur: "#00000066", borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)", bottom: 0, zIndex: 1,}}>
            <Row css={{alignItems:"center"}}>
              <Col>
                <Text color="#fff">{title}</Text>
              </Col>
              <Col >
                <Row justify="flex-end" >
                  <Button flat auto rounded color="success" onPress={downloadHandler} >
                    <Text css={{ color: "inherit" }} size={12} weight="bold" transform="uppercase">
                      Download
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Modal blur noPadding aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
        <Modal.Header css={{ position: "absolute", zIndex: 1, top: 5, right: 5, gap: 5, justifyContent: 'space-between' }}>
          <Button auto onPress={closeHandler} rounded color="error" css={{ p: 8 }} >
            <IconX fill="#fff" />
          </Button>
        </Modal.Header>
        <Modal.Body css={{ p: 0 }}>
          <Image src={url} width="100%" height="100%" objectFit='cover' alt={title}/>
        </Modal.Body>
        <Modal.Footer css={ {p:6 }}>
        <Row gap={1} css={{display:'flex' ,justifyContent:'space-between'}}>
            <Col css={{textAlign:'left'}}>
                <Text size={14}>{title}</Text>
            </Col>
            <Col css={{alignContent:'center', display:'flex', justifyContent:"end"}}>
              <Button flat auto rounded color="success" onPress={downloadHandler}>
                <Text css={{ color: "inherit" }} size={12} weight="bold" transform="uppercase">
                  Download
                </Text>
              </Button>
            </Col>
          </Row>

        </Modal.Footer>
      </Modal>
    </>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
