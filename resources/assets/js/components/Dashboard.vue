<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="panel panel-default">
                    <div class="panel-heading">Menu</div>

                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="list-group-item">Item 1</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-md-9">
                <div class="panel panel-default">
                    <div class="panel-heading">Mapa</div>

                    <div class="panel-body">
                        <map
                            style="width: 100%; height: 450px; display: block;"
                            :center="{lat: -9.650896, lng: -35.705712}"
                            :zoom="12"
                        >
                            <marker
                                v-for="m in markers"
                                :position="m.position"
                                :clickable="true"
                                :draggable="false"
                                @g-click="showInfo(m)"
                            >
                                <info-window
                                    :content="m.info"
                                    :opened.sync="m.opened"
                                    :position.sync="m.position"
                                >
                                </info-window>
                            </marker>
                        </map>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {load, Map, Marker, InfoWindow} from 'vue-google-maps';

    load(GOOGLE_API_KEY);

    export default {
        components: {
            'map': Map,
            'marker': Marker,
            'info-window': InfoWindow
        },
        data() {
            return {
                markers: []
            }
        },
        methods: {
            showInfo(marker) {
                _.map(this.markers, (m) => {
                    m.opened = false;
                });
                marker.opened = true;
            }
        },
        ready() {
            const conn = this.$http.get('/places.json');

            conn.then(({data}) => {
                this.markers = JSON.parse(data);
            });
        }
    }
</script>
