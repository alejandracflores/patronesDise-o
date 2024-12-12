/// Singleton en Typescript
class MySingleton {
	private static instance: MySingleton;
	private data: string;
	
	private constructor () {
		this.data = 'Initial data';
	}
	
	public static getInstance(): MySingleton {
		if (!MySingleton.instance) {
			MySingleton.instance = new MySingleton();
		}
		return MySingleton.instance;
	}
	
	public setData(newData: string): void {
		this.data = newData;
	}
	
	public getData(): string {
		return this.data;
	}
}

const singletonInstance1 = MySingleton.getInstance();
console.log(singletonInstance1.getData());

const singletonInstance2 = MySingleton.getInstance();
console.log(singletonInstance2.getData());
console.log('----------------------------------------')

singletonInstance1.setData('Update data')
console.log(singletonInstance1.getData());
console.log(singletonInstance2.getData());