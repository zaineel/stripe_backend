import { CheckoutButton } from './components/checkout-button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-md w-full">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-4 text-2xl font-bold">Sample Product</h1>
          <p className="mb-4 text-gray-600">
            This is a sample product description. The product costs $10.00.
          </p>
          <CheckoutButton price={10} />
        </div>
      </div>
    </main>
  )
}

