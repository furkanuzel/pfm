import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SignOutItem } from "../_header/sign-out-item";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Bar, BarChart } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig


export default async function Page() {
  return (
    <main>
      <nav className="bg-black py-4 px-3 max-w-[1000px] my-10 rounded-xl mx-auto flex items-center justify-between">
        <p className="text-sm">Welcome, email</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <User className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-2">
            <SignOutItem />
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <div className="max-w-[1000px] mx-auto">
        <div className="flex gap-6">

          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Add Income</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="category">Category</Label>
                      <Input id="name" placeholder="Write your income category" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Framework</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>Add</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="flex-1 border"><Card>
            <CardHeader>
              <CardTitle>Add Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="category">Category</Label>
                    <Input id="name" placeholder="Write your expense category" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="framework">Framework</Label>
                    <Select>
                      <SelectTrigger id="framework">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Add</Button>
            </CardFooter>
          </Card>
          </div>
        </div>
      </div>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
    </main>
  
  );
}

