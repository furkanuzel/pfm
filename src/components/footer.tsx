import { applicationName, companyName } from "@/app-config";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="border-t dark:bg-background">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:text-center gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                Product
              </h3>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/features"
                    className="hover:text-foreground ease-linear duration-50 text-muted-foreground text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/pricing"
                    className="hover:text-foreground ease-linear duration-50 text-muted-foreground text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/examples"
                    className="hover:text-foreground ease-linear duration-50 text-muted-foreground text-sm"
                  >
                    Examples
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                Legal
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-2">
                  <Link
                    href="/privacy"
                    className="hover:text-foreground ease-linear duration-50 text-muted-foreground text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/terms-of-service"
                    className="hover:text-foreground ease-linear duration-50 text-muted-foreground text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                Social
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    href="https://x.com/AltmateAI"
                    className="hover:text-foreground ease-linear duration-50 text-muted-foreground text-sm"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6 max-md:px-2">
        <span className="max-md:block text-sm text-center text-gray-500 dark:text-gray-400">
          © 2024 <Link href="/">{applicationName}</Link>.
        </span>{" "}
        <span className="text-sm text-center text-gray-500 dark:text-gray-400">
          All Rights Reserved. Built with ❤️ by {companyName}
        </span>
      </div>
    </footer>
  );
}
