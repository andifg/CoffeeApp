

const getName = async () => {
      const response = await fetch(`https://randomuser.me/api/`);
      if (!response.ok){
        throw new Error('Error ');
      }
      let actualData = await response.json();
      const completeName = `${actualData.results[0].name.first} ${actualData.results[0].name.last}`;
      return completeName
  };



export {getName}