import { Col, Row } from "react-bootstrap"
import { Header } from "../components/Header"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Home() {
  return (
    <>
    <Header/>
      <Row md={2} xs={1} lg={3} className="g-3 pb-5">
        {storeItems.map(item => (
          <Col key={item.id}  className="rounded" >
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}
