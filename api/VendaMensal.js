import mongose from "mongoose"

const VendaMensalSchema = new mongose.Schema({
    mes: {
        type: Number,
        // required: true
    },
    valorVendido: {
        type: Number,
        // required: true
    }
})

export default mongose.model("VendaMensal", VendaMensalSchema)