import {Header} from "@/components/header"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
        <Header/>
            <main>
                {children}
            </main>
        </>
    )
}