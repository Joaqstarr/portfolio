
export default function ProjectDetails(params) {
    return(

        <div className="pb-6">
            <div className="w-full md:w-fit md:m-auto  md:rounded md:border md:border-gray-800 md:shadow-xl ">
                <table className="w-full table-auto border-collapse ">
                    <tbody>
                    <tr>
                        <td className="border-b border-gray-800" width={100}>Engine</td>
                        <td className="border-b border-gray-800 md:pr-5">{params.element.engine}</td>
                    </tr>
                    <tr>
                        <td className="border-b border-gray-800">Time</td>
                        <td className="border-b border-gray-800 md:pr-5">{params.element.time}</td>
                    </tr>
                    <tr>
                        <td className="border-b border-gray-800">Team Size </td>
                        <td className="border-b border-gray-800  md:pr-5">{params.element.teamSize}</td>
                    </tr>
                    <tr>
                        <td className="border-b border-gray-800 md:border-0">Role</td>
                        <td className="border-b border-gray-800 md:border-0 md:pr-5">{params.element.role}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}