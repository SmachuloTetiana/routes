interface Server {
    id: number;
    name: string;
    status: string;
}

export class ServersService {
    private servers: Server[] = [
        {
            id: 1,
            name: 'Test',
            status: 'online'
        },
        {
            id: 2,
            name: 'TestServers',
            status: 'offline'
        },
        {
            id: 3,
            name: 'TestServers2',
            status: 'offline'
        }
    ];

    getServers() {
        return this.servers;
    }

    getServer(id: number) {
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
        );
        return server;
    }

    addServers(server: Server) {
        this.servers.push(server);
    }
}