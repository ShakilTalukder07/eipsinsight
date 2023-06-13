
const SingleTable = ({ table }) => {

    console.log(table);

    return (
        <div>
            <tr class="border-b dark:border-neutral-500 text-[#3BC9DB] font-bold">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                    <td class="whitespace-nowrap px-6 py-4">Storage of DNS Records in ENS</td>
                                    <td class="whitespace-nowrap px-6 py-4">Jim McDonald (@mcdee)</td>
                                    <td class="whitespace-nowrap px-6 py-4">Standards Track</td>
                                    <td class="whitespace-nowrap px-6 py-4">ERC</td>
                                    <td class="whitespace-nowrap px-6 py-4">Review</td>
                                </tr>
                                <tr class="border-b dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium ">2</td>
                                    <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                    <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                    <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                    <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                </tr>
                                <tr class="border-b ">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium ">3</td>
                                    <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                    <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                    <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                    <td class="whitespace-nowrap px-6 py-4">Cell</td>
                                </tr>
        </div>
    );
};

export default SingleTable;