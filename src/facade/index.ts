export class Building {
    setFrame() {
        console.log("a frame has been builded");
    }
    setDoor() {
        console.log("a door has been added");
    }

    setWindows() {
        console.log("windows have been added");
    }

    setRoof() {
        console.log("a roof has been installed");
    }

    paint() {
        console.log("a building has been painted");
    }
}

export class BuildingFacade {
    building: Building;
    constructor(building:Building) {
        this.building = building
    }

    createBuilding() {
        this.building.setFrame();
        this.building.setDoor();
        this.building.setWindows();
        this.building.setRoof();
        this.building.paint();
        return this.building;
    }
}