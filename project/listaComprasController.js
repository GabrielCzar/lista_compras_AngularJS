function lista_compras_controller ($scope) {
	//cria uma lista com itens
	$scope.itens = [
		{ produto : 'leite', quantidade : 2, comprado : false},
		{ produto : 'Cerveja', quantidade : 12, comprado : false}
	];

	$scope.adiciona_item = function() {
		//adiciona o item a lista de itens
		$scope.itens.push(
			{ produto : $scope.item.produto, quantidade : $scope.item.quantidade, comprado : false}
		);
		//limpa o produto e a quantidade
		$scope.item.produto = $scope.item.quantidade = '';
	}
}