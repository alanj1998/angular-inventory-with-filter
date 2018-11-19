export interface IOpenClipArt {
    payload: IPayload[]
}

interface IPayload {
    title: string
    svg: ISvg
}

interface ISvg {
    url: string
}