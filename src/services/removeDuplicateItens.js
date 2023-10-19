const accomplishPayment = ()=>{
    const ids = cart.map((product)=>{
        return {
            idProd: product.id_product,
            qtdPurchase: product.qtd_purchase,
        }
    })

    const body = {
        qtdPurchase: 1
    }

    ids.forEach(product => {
        // console.log(product.qtdPurchase);
        axios
            .post(`${BASE_URL}/purchases/makePurchase/${localStorage.getItem('idClient')}/${product.ids}`, body)
            .then((res)=>{console.log(res.data.message);})
            .catch((err)=>{console.log(err.response.message);})
    });
}