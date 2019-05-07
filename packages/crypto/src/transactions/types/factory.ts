import { TransactionConstructor } from "..";
import { TransactionTypes } from "../../enums";
import { UnkownTransactionError } from "../../errors";
import { ITransaction, ITransactionData } from "../../interfaces";

export class TransactionTypeFactory {

    private static coreTypes: Map<TransactionTypes, TransactionConstructor>;
    private static customTypes: Map<number, TransactionConstructor>;
    public static initialize(
        coreTypes: Map<TransactionTypes, TransactionConstructor>,
        customTypes: Map<TransactionTypes, TransactionConstructor>,
    ) {
        TransactionTypeFactory.coreTypes = coreTypes;
        TransactionTypeFactory.customTypes = customTypes;
    }

    public static create(data: ITransactionData): ITransaction {
        const instance: ITransaction = new (TransactionTypeFactory.get(data.type) as any)() as ITransaction;
        instance.data = data;

        return instance;
    }

    public static get(type: TransactionTypes | number): TransactionConstructor {
        if (TransactionTypeFactory.coreTypes.has(type)) {
            return TransactionTypeFactory.coreTypes.get(type);
        }

        if (TransactionTypeFactory.customTypes.has(type)) {
            return TransactionTypeFactory.customTypes.get(type);
        }

        throw new UnkownTransactionError(type);
    }
}
