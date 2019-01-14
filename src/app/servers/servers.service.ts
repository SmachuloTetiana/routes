export class ServersService {
    private servers = [
        {
            id: 1,
            name: 'Test',
            status: 'online'
        },
        {
            id: 2,
            name: 'TestServers',
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
}