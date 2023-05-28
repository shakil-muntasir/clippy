import { Schema, model, InferSchemaType } from 'mongoose'

const schema = new Schema({
    body: {
        type: String,
        required: true
    }
}, {timestamps: true})

type Clipboard = InferSchemaType<typeof schema>

export default model<Clipboard>('Clipboard', schema)