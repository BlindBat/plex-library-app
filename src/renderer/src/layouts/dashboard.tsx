import * as React from 'react'
import { Outlet } from 'react-router'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { PageContainer } from '@toolpad/core/PageContainer'
import SLOTS from '@renderer/consts/slots'
import Versions from '@renderer/components/Versions'

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout
      slots={SLOTS}
      sx={{
        backgroundImage: `url('src/assets/wavy-lines.svg')`
      }}
    >
      <PageContainer>
        <Outlet />
        <Versions />
      </PageContainer>
    </DashboardLayout>
  )
}

export default Dashboard
