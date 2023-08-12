import Navbar from "@/components/navbar";

const RootLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return (  
        <div className="h-full">
            <Navbar />
            <main className="md:px-20 pt-16 h-full">
            {children}
            </main>
        </div>
    );
}
 
export default RootLayout;