import { Header } from '@/components/Header'
import { DashboardOverview } from '@/components/DashboardOverview'
import { SalesTrends } from '@/components/SalesTrends'
import { CustomerInsights } from '@/components/CustomerInsights'
import { PredictiveForecasting } from '@/components/PredictiveForecasting'
import { ProductPerformance } from '@/components/ProductPerformance'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Sales Insights Dashboard
          </h1>
          <p className="text-gray-600">
            AI-driven analytics to optimize product development and sales strategy
          </p>
        </div>
        
        <DashboardOverview />
        <SalesTrends />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CustomerInsights />
          <PredictiveForecasting />
        </div>
        <ProductPerformance />
      </main>
    </div>
  )
}