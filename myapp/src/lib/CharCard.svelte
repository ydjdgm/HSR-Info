<script lang="ts">
    export let character: {
        name: string;
        image: string;
        combatType: "Ice" | "Lightning" | "Imaginary" | "Quantum";
        path: "The Erudition" | "The Remembrance" | "The Destruction" | "The Harmony";
    };

    const combatTypeIcons = {
        Ice: "/combatType/ice.png",
        Lightning: "/combatType/lightning.png",
        Imaginary: "/combatType/imaginary.png",
        Quantum: "/combatType/quantum.png"
    };

    const pathIcons = {
        "The Erudition": "/path/erudition.png",
        "The Remembrance": "/path/remembrance.png",
        "The Destruction": "/path/destruction.png",
        "The Harmony": "/path/harmony.png"
    };
</script>

<div class="charCard">
    <img class="charImg"src={character.image} alt={character.name} />
    <h2>{character.name}</h2>
    <div class="icons">
        <img class="combatTypeIcon"src={combatTypeIcons[character.combatType]} alt={character.combatType}>
        <img class="pathIcon"src={pathIcons[character.path]} alt={character.path}>
    </div>
</div>

<style>
    .charCard {
        background: #1a1a2e;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        width: 200px;
        color: white;
        position: relative; /* 내부 아이콘의 절대 위치 기준 */
    }.charCard .charImg {
        width: 100%;
        border-radius: 5px;
    }.charCard .icons {
    position: relative; /* 내부 아이콘 배치를 위해 */
    }.charCard .combatTypeIcon {
    position: absolute;
    bottom: 170px;
    left: -10px;
    width: 30px;
    height: 30px;
    }.charCard .pathIcon {
    position: absolute;
    bottom: 170px;
    right: -10px;
    width: 30px;
    height: 30px;
    }
</style>