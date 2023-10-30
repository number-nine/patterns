export class Door {
    open() {
        console.log('opening door');
    }
    close() {
        console.log("closing door");
    }
}

export class SecureDoor {
    door: Door;
    lock:string = '1234'
    constructor(door:Door) {
        this.door = door;
    }
    
    open(pin:string) {
        if (this.authenticate(pin)) {
            console.log('Access granted');
            this.door.open()
        } else {
            console.log('Access denided');
        }
    }

    authenticate(pin: string): boolean {
        return pin === this.lock;
    }

    close() {
        this.door.close();
    }
}