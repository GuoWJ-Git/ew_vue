import { CacheTypeEnum } from '@/enums/cacheEnum';

interface ProjectSetting {
  permissionCacheType: number;
}

const setting: ProjectSetting = {
  permissionCacheType: CacheTypeEnum.LOCAL,
};

export default setting;
