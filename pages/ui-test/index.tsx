import type { GetServerSidePropsResult, NextPage } from 'next'
import { Table } from 'antd'

const UiTestPage: NextPage = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    }
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }
  ]

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export async function getServerSideProps (): Promise<GetServerSidePropsResult<object>> {
  return {
    props: {} // will be passed to the page component as props
  }
}

export default UiTestPage
