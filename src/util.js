export const sortData = (data) => {
    const sortedData = [...data];

    // Short method to do it
    return sortedData.sort((a,b) => (a.cases > b.cases ? -1 : 1))
    
    // Other method to do it
    // sortedData.sort((a,b) => {
    //     if (a.cases > b.cases) {
    //         return -1;
    //     } else {
    //         return 1;
    //     }
    // })
    // return sortedData;
}