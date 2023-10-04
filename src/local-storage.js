// const storedFavoriteGamesJSON = localStorage.getItem("favoriteGames");
  // const storedFavoriteGames = storedFavoriteGamesJSON
  //   ? JSON.parse(storedFavoriteGamesJSON)
  //   : [];

  // const addFavoriteGame = (game: FavoriteGame) => {
  //   const newGame: FavoriteGame = {...game, favorite: true};
  //   storedFavoriteGames.push(newGame);
  //   localStorage.setItem("favoriteGames", JSON.stringify(storedFavoriteGames));
  // };

  // const removeFavoriteGame = (gameId: number) => {
  //   const updateFavoriteGames = storedFavoriteGames.filter(
  //     (item: FavoriteGame) => item.id !== gameId
  //   );
  //   localStorage.setItem("favoriteGames", JSON.stringify(updateFavoriteGames));
  // };