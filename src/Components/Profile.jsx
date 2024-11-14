import { Card } from "flowbite-react"
import pp from "../assets/pp.jpg"

const Profile = () => {
    return (
        <Card className="max-w-full m-5">
            <div className="flex justify-between px-4 pt-4 flex-wrap">
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Profile Image"
                        height="96"
                        src={pp}
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ira Revaliawanti</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Web designer</span>
                </div>
                <div className="coloumn py-4 sm:text-center md:text-left">
                    <h4 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Phone +62 95-6096-80608</h4>
                    <h5>Email irevaliawanti@gmail.com</h5>
                    <h5>Github: github.com/iraa-ui</h5>
                    <h5>Instagram: https://www.instagram.com/ir4rv</h5>
                </div>
            </div>
        </Card>
    )
}

export default Profile