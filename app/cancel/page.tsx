import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { XCircle } from 'lucide-react'

export default function CancelPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <XCircle className="h-16 w-16 text-red-500" />
        </div>
        <h1 className="mb-4 text-2xl font-bold">Payment Cancelled</h1>
        <p className="mb-8 text-gray-600">
          Your payment was cancelled. No charges were made.
        </p>
        <Link href="/">
          <Button>Try Again</Button>
        </Link>
      </div>
    </div>
  )
}

