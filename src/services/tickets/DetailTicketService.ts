import prismaClient from "../../prismaConnect";

interface DetailTicketRequest{
    ticket_id : string
}


class DetailTicketService{

    async execute ({ticket_id}: DetailTicketRequest){
        const ticket = await prismaClient.ticket.findFirst({
            where:{
                id : ticket_id
            }
        })
        return ticket
    }
}
export { DetailTicketService}