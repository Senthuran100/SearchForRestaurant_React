
import { Card, Col, Row, Space, Spin } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { connect } from 'react-redux'


function Collections(props) {
    let rows=[]
    if (props.collections.collections) {
         rows = props.collections.collections.reduce( (rows, key, index) =>{ 
            return (index % 3 === 0 ? rows.push([key]) 
              : rows[rows.length-1].push(key)) && rows;
          }, []);
        console.log('row',rows)
    }


    return (

        props.collections.collections ?
            rows.map((row) =>
            <Row>
                {row.map(col => (<Col>
                    <Card
                        hoverable
                        style={{ width: 240, height : 480 }}
                        cover={<img alt="example" src={col.collection.image_url} />}
                    >
                        <Meta title={col.collection.title} description={col.collection.description} />
                    </Card>
                </Col>))}
            </Row>
            ) :
            <Space size="middle">
                <Spin size="large" />
            </Space>

    )

}


const mapStateToProps = (state) => {
    console.log('state..', state.reducer.collections)
    return {
        collections: state.reducer.collections
    };
}

export default connect(mapStateToProps)(Collections)

