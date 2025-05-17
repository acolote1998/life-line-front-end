import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/days/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/days/"!</div>
}
